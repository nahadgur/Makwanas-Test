'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '@/constants';

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
         <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-gray-900">What Our Clients Say</h2>
         </div>

         <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-gray-50 p-8 rounded-2xl relative"
              >
                <Quote className="absolute top-6 right-6 text-makwana-mid/20 w-8 h-8" />
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, idx) => (
                    <Star key={idx} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6">"{t.content}"</p>
                <div>
                  <p className="font-bold text-makwana-dark">{t.name}</p>
                  <p className="text-sm text-gray-500 uppercase tracking-wide">{t.role}</p>
                </div>
              </motion.div>
            ))}
         </div>
      </div>
    </section>
  );
};

export default Testimonials;