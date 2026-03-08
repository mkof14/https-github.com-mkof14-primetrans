import express from "express";
import { createServer as createViteServer } from "vite";
import Database from 'better-sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Database setup
  const db = new Database('prime_trans.db');
  db.exec(`
    CREATE TABLE IF NOT EXISTS newsletter (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT UNIQUE,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
    CREATE TABLE IF NOT EXISTS contacts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      email TEXT,
      company TEXT,
      service TEXT,
      message TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
    CREATE TABLE IF NOT EXISTS jobs (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT,
      department TEXT,
      location TEXT,
      type TEXT,
      description TEXT,
      requirements TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `);

  // Seed jobs if empty
  const jobsCount = db.prepare('SELECT COUNT(*) as count FROM jobs').get() as { count: number };
  if (jobsCount.count === 0) {
    const seedJobs = [
      ['Senior Technical Project Manager', 'Operations', 'Charlotte, NC / Remote', 'Full-time', 'Lead complex technical projects from inception to delivery.', '10+ years experience, PMP certified, Technical background.'],
      ['AI Strategy Consultant', 'Advisory', 'Remote', 'Contract', 'Advise clients on AI integration and strategic roadmaps.', 'Deep understanding of LLMs, 5+ years in consulting.'],
      ['Cybersecurity Lead', 'Security', 'Charlotte, NC', 'Full-time', 'Oversee enterprise-level security audits and implementations.', 'CISSP, experience with Zero Trust architectures.']
    ];
    const insertJob = db.prepare('INSERT INTO jobs (title, department, location, type, description, requirements) VALUES (?, ?, ?, ?, ?, ?)');
    seedJobs.forEach(job => insertJob.run(...job));
  }

  app.use(express.json());

  // API Routes
  app.get("/api/jobs", (req, res) => {
    try {
      const jobs = db.prepare('SELECT * FROM jobs ORDER BY created_at DESC').all();
      res.json(jobs);
    } catch (err) {
      res.status(500).json({ error: "Internal server error" });
    }
  });

  app.get("/api/admin/stats", (req, res) => {
    try {
      const newsletterCount = db.prepare('SELECT COUNT(*) as count FROM newsletter').get() as { count: number };
      const contactCount = db.prepare('SELECT COUNT(*) as count FROM contacts').get() as { count: number };
      const recentContacts = db.prepare('SELECT * FROM contacts ORDER BY created_at DESC LIMIT 5').all();
      const recentSubscribers = db.prepare('SELECT * FROM newsletter ORDER BY created_at DESC LIMIT 5').all();
      
      res.json({
        stats: {
          subscribers: newsletterCount.count,
          inquiries: contactCount.count
        },
        recentContacts,
        recentSubscribers
      });
    } catch (err) {
      res.status(500).json({ error: "Internal server error" });
    }
  });

  app.post("/api/newsletter", (req, res) => {
    const { email } = req.body;
    if (!email) return res.status(400).json({ error: "Email is required" });
    
    try {
      const stmt = db.prepare('INSERT INTO newsletter (email) VALUES (?)');
      stmt.run(email);
      res.json({ success: true, message: "Subscribed successfully" });
    } catch (err: any) {
      if (err.code === 'SQLITE_CONSTRAINT') {
        res.status(400).json({ error: "Email already subscribed" });
      } else {
        res.status(500).json({ error: "Internal server error" });
      }
    }
  });

  app.post("/api/contact", (req, res) => {
    const { name, email, company, service, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: "Name, email, and message are required" });
    }

    try {
      const stmt = db.prepare('INSERT INTO contacts (name, email, company, service, message) VALUES (?, ?, ?, ?, ?)');
      stmt.run(name, email, company, service, message);
      res.json({ success: true, message: "Message sent successfully" });
    } catch (err) {
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Serve static files in production
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
