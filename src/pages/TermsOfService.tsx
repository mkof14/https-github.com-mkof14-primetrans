import { motion } from 'motion/react';

export default function TermsOfService() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <header className="mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-6"
          >
            Terms of Service
          </motion.h1>
          <p className="text-slate-500">Last updated: March 06, 2026</p>
        </header>

        <div className="prose prose-slate dark:prose-invert max-w-none space-y-8 text-slate-600 dark:text-slate-400">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">1. Agreement to Terms</h2>
            <p>
              By accessing or using the services provided by Prime Trans, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">2. Intellectual Property Rights</h2>
            <p>
              Unless otherwise indicated, the website and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio) are owned by Prime Trans and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">3. User Representations</h2>
            <p>
              By using the services, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">4. Prohibited Activities</h2>
            <p>
              You may not access or use the services for any purpose other than that for which we make the services available. The services may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">5. Limitation of Liability</h2>
            <p>
              In no event will Prime Trans, its directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">6. Governing Law</h2>
            <p>
              These terms shall be governed by and defined following the laws of the jurisdiction in which Prime Trans operates. Prime Trans and yourself irrevocably consent that the courts of said jurisdiction shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">7. Contact Us</h2>
            <p>
              In order to resolve a complaint regarding the services or to receive further information regarding use of the services, please contact us at:
            </p>
            <p className="mt-2 font-medium text-slate-900 dark:text-white">
              Email: legal@primetrans.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
