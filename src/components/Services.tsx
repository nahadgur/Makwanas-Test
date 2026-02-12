'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SERVICES } from '@/constants';
import { ChevronRight, CheckCircle2 } from 'lucide-react';

const Services: React.FC = () => {
  const [activeService, setActiveService] = useState<string | null>(SERVICES[0].id);

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-display font-bold text-makwana-dark mb-4">Areas of Expertise</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">We specialize in niche areas of law where the consequences of a conviction can be disproportionately severe. Our goal is damage limitation and reputation protection.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* List of Services */}
          <div className="space-y-4">
            {SERVICES.map((service) => (
              <motion.div
                key={service.id}
                className={`cursor-pointer rounded-2xl p-6 transition-all duration-300 border-2 ${
                  activeService === service.id 
                    ? 'bg-makwana-bg border-makwana-mid shadow-lg scale-[1.02]' 
                    : 'bg-gray-50 border-transparent hover:bg-gray-100'
                }`}
                onClick={() => setActiveService(service.id)}
                whileHover={{ x: 5 }}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                    activeService === service.id ? 'bg-makwana-mid' : 'bg-gray-300'
                  }`}>
                    {React.cloneElement(service.icon as React.ReactElement, { className: 'w-6 h-6 text-white' })}
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-xl font-bold ${activeService === service.id ? 'text-makwana-dark' : 'text-gray-700'}`}>
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">{service.description}</p>
                  </div>
                  <ChevronRight className={`transition-transform duration-300 ${activeService === service.id ? 'rotate-90 text-makwana-mid' : 'text-gray-400'}`} />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Detailed View Panel */}
          <div className="bg-makwana-dark rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden min-h-[400px] flex flex-col justify-center">
             {/* Decorative Circles */}
             <div className="absolute -top-20 -right-20 w-64 h-64 bg-makwana-mid opacity-20 rounded-full blur-3xl"></div>
             <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-makwana-light opacity-20 rounded-full blur-3xl"></div>

             <AnimatePresence mode="wait">
               {activeService && (
                 <motion.div
                   key={activeService}
                   initial={{ opacity: 0, x: 20 }}
                   animate={{ opacity: 1, x: 0 }}
                   exit={{ opacity: 0, x: -20 }}
                   transition={{ duration: 0.3 }}
                   className="relative z-10"
                 >
                   {(() => {
                     const service = SERVICES.find(s => s.id === activeService);
                     if (!service) return null;
                     return (
                       <>
                         <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm">
                           {React.cloneElement(service.icon as React.ReactElement, { className: 'w-8 h-8 text-white' })}
                         </div>
                         <h3 className="text-3xl font-display font-bold mb-4">{service.title}</h3>
                         <p className="text-white/80 text-lg mb-8 leading-relaxed">
                           {service.description}
                         </p>
                         <h4 className="font-semibold text-makwana-light uppercase tracking-wider text-sm mb-4">How We Help</h4>
                         <ul className="space-y-3">
                           {service.details.map((detail, idx) => (
                             <motion.li 
                               key={idx}
                               initial={{ opacity: 0, y: 10 }}
                               animate={{ opacity: 1, y: 0 }}
                               transition={{ delay: 0.1 * idx }}
                               className="flex items-start gap-3"
                             >
                               <CheckCircle2 className="w-5 h-5 text-makwana-light mt-0.5 shrink-0" />
                               <span className="text-gray-100">{detail}</span>
                             </motion.li>
                           ))}
                         </ul>
                         
                         <div className="mt-8 pt-8 border-t border-white/10">
                            <a href="#contact" className="inline-flex items-center text-white font-semibold hover:text-makwana-light transition-colors">
                              Book a consultation regarding {service.title} <ChevronRight className="ml-2 w-4 h-4" />
                            </a>
                         </div>
                       </>
                     );
                   })()}
                 </motion.div>
               )}
             </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;