'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import { CONTACT_EMAIL, CONTACT_PHONE } from '@/constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-makwana-dark relative overflow-hidden">
       {/* Background pattern */}
       <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #c2185b 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-16"
        >
          {/* Contact Info */}
          <div className="text-white space-y-8">
            <div>
              <h2 className="text-4xl font-display font-bold mb-6">Contact Us Today</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Time is often critical in these matters. Contact us for a confidential, no-obligation discussion about your case. We operate with strict discretion.
              </p>
            </div>

            <div className="space-y-6">
              <a href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`} className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-makwana-mid transition-colors">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Call Us</p>
                  <p className="text-xl font-bold">{CONTACT_PHONE}</p>
                </div>
              </a>
              
              <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-makwana-mid transition-colors">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email Us</p>
                  <p className="text-xl font-bold">{CONTACT_EMAIL}</p>
                </div>
              </a>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-makwana-mid transition-colors">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">London Office</p>
                  <p className="text-xl font-bold">Canary Wharf, London</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-makwana-mid focus:ring-1 focus:ring-makwana-mid transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-makwana-mid focus:ring-1 focus:ring-makwana-mid transition-colors" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-makwana-mid focus:ring-1 focus:ring-makwana-mid transition-colors" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Case Type</label>
                <select className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-makwana-mid focus:ring-1 focus:ring-makwana-mid transition-colors">
                  <option>Fare Evasion / TFL Prosecution</option>
                  <option>Blue Badge Misuse</option>
                  <option>Criminal Defense</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea rows={4} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-makwana-mid focus:ring-1 focus:ring-makwana-mid transition-colors"></textarea>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-makwana-mid hover:bg-makwana-dark text-white font-bold py-4 rounded-lg shadow-lg transition-colors"
              >
                Send Message
              </motion.button>
              <p className="text-xs text-gray-500 text-center">Your details are kept strictly confidential.</p>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;