import { BookOpen, TrendingUp, Cpu, Shield } from 'lucide-react';

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of AI in Supply Chain Management',
    slug: 'future-ai-supply-chain',
    excerpt: 'How artificial intelligence is transforming logistics from reactive to predictive models.',
    content: `
      ## The Shift to Predictive Logistics
      
      For decades, supply chain management has been a reactive field. Companies responded to disruptions as they happened. Today, the integration of AI is changing the game.
      
      ### Predictive Analytics
      By analyzing vast amounts of historical data, AI can predict demand spikes, potential delays, and even equipment failures before they occur.
      
      ### Autonomous Optimization
      Modern AI systems can automatically reroute shipments in real-time based on weather, traffic, and geopolitical events, ensuring maximum efficiency.
      
      ### Conclusion
      The companies that embrace AI-driven management today will be the leaders of tomorrow's global economy.
    `,
    category: 'AI & Logistics',
    author: 'Dr. Aris Thorne',
    date: 'March 5, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800',
    tags: ['AI', 'Logistics', 'Supply Chain', 'Innovation']
  },
  {
    id: '2',
    title: 'Securing the Digital Frontier: Modern Cybersecurity Strategies',
    slug: 'securing-digital-frontier',
    excerpt: 'Essential strategies for protecting enterprise assets in an increasingly complex threat landscape.',
    content: `
      ## Beyond the Firewall
      
      The traditional perimeter-based security model is dead. In a world of remote work and cloud services, security must be everywhere.
      
      ### Zero Trust Architecture
      "Never trust, always verify." This principle is the foundation of modern cybersecurity. Every access request must be authenticated and authorized.
      
      ### AI-Powered Threat Detection
      Hackers are using AI, and defenders must do the same. Machine learning models can identify anomalous behavior that human analysts might miss.
      
      ### The Human Element
      Technology is only half the battle. Continuous training and a culture of security awareness are critical for any organization.
    `,
    category: 'Security',
    author: 'James Vane',
    date: 'February 28, 2026',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
    tags: ['Cybersecurity', 'Enterprise', 'Zero Trust', 'AI']
  },
  {
    id: '3',
    title: 'Agro-Tech: Feeding the World with Data',
    slug: 'agro-tech-feeding-world',
    excerpt: 'Exploring the intersection of agriculture and technology to solve global food security.',
    content: `
      ## Precision Agriculture
      
      Agriculture is undergoing a digital revolution. Data is becoming as important as water and soil.
      
      ### IoT in the Field
      Sensors measuring soil moisture, nutrient levels, and crop health provide real-time data that allows for precise resource allocation.
      
      ### Satellite Imagery
      High-resolution satellite data helps farmers monitor large areas and identify issues before they spread.
      
      ### Sustainable Scaling
      Technology allows us to increase yields while decreasing environmental impact, a necessity for a growing global population.
    `,
    category: 'Agro-Tech',
    author: 'Elena Rodriguez',
    date: 'February 15, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=800',
    tags: ['Agriculture', 'IoT', 'Sustainability', 'Data']
  }
];
