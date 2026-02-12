'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SUCCESS_STORIES } from '@/constants';
import { ShieldCheck, ArrowUpRight } from 'lucide-react';

const SuccessStories: React.FC = () => {
  return (
    <section id="success-stories" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
           <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-green-100 px-3 py-1 rounded-full text-green-800 text-xs font-bold uppercase tracking-wider mb-4">
                <ShieldCheck size={14} /> Proven Results
              </div>
              <h2 className="text-4xl font-display font-bold text-gray-900">Client Success Stories</h2>
              <p className="text-gray-600 mt-4">Real outcomes from recent cases. Names are anonymized to protect client privacy.</p>
           </div>
           <a href="#contact" className="hidden md:flex items-center gap-2 text-makwana-mid font-bold hover:underline mt-4 md:mt-0">
             Start your success story <ArrowUpRight size={18} />
           </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
           {SUCCESS_STORIES.map((story, i) => (
             <motion.div
               key={story.id}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.15 }}
               className="group relative bg-gray-50 rounded-3xl p-8 hover:bg-makwana-dark transition-colors duration-500 overflow-hidden"
             >
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-makwana-mid/10 rounded-bl-full group-hover:bg-white/10 transition-colors"></div>

                <div className="relative z-10">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-makwana-mid group-hover:text-makwana-dark">
                    {React.cloneElement(story.icon as React.ReactElement, { className: 'w-6 h-6' })}
                  </div>
                  
                  <span className="text-xs font-bold text-makwana-mid uppercase tracking-wider mb-2 block group-hover:text-makwana-light">
                    {story.category}
                  </span>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-white transition-colors">
                    {story.title}
                  </h3>

                  <div className="space-y-4">
                    <div className="bg-white/50 group-hover:bg-white/10 p-4 rounded-xl transition-colors">
                      <p className="text-xs font-bold text-gray-500 uppercase mb-1 group-hover:text-gray-400">The Challenge</p>
                      <p className="text-sm text-gray-700 group-hover:text-gray-200">{story.challenge}</p>
                    </div>
                    
                    <div className="bg-green-50 group-hover:bg-green-900/30 p-4 rounded-xl border border-green-100 group-hover:border-green-500/30 transition-colors">
                      <p className="text-xs font-bold text-green-700 uppercase mb-1 group-hover:text-green-400">The Outcome</p>
                      <p className="text-sm text-gray-900 font-medium group-hover:text-white">{story.outcome}</p>
                    </div>
                  </div>
                </div>
             </motion.div>
           ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <a href="#contact" className="inline-flex items-center gap-2 text-makwana-mid font-bold">
             Start your success story <ArrowUpRight size={18} />
           </a>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;