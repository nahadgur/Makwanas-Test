import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  { title: "Initial Consultation", description: "We assess your case details immediately to understand the urgency and risks involved." },
  { title: "Strategy Formulation", description: "We analyze the evidence and determine the best route: Out-of-Court Settlement or Trial Defense." },
  { title: "Representation", description: "We deal directly with TFL, Councils, or the Courts on your behalf, removing the stress from you." },
  { title: "Resolution", description: "Our aim is always to avoid a criminal record and minimize penalties, protecting your career and reputation." }
];

const Process: React.FC = () => {
  return (
    <section id="process" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">Our Process</h2>
          <p className="text-gray-600">Clear, strategic, and effective.</p>
        </div>

        <div className="relative">
          {/* Vertical Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2"></div>

          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Content Side */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'} text-center md:px-12`}>
                   <h3 className="text-2xl font-bold text-makwana-dark mb-2">{step.title}</h3>
                   <p className="text-gray-600">{step.description}</p>
                </div>

                {/* Center Point */}
                <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-white border-4 border-makwana-mid flex items-center justify-center shadow-lg">
                  <span className="text-makwana-mid font-bold">{index + 1}</span>
                </div>

                {/* Empty Side for Balance */}
                <div className="flex-1 hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;