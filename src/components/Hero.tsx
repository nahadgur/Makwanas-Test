'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-50 pt-20">
      
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1758518726741-6451f7f71348?q=80&w=1331&auto=format&fit=crop" 
          alt="Lawyer Office Background" 
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient: White on Left for text readability -> Transparent on Right for image visibility */}
        {/* Adjusted to be much subtler so the image is not washed out */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-50 via-white/70 to-transparent sm:w-[80%]"></div>
      </div>

      {/* Abstract Shapes (Subtle background effect) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
         <motion.div 
          className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-makwana-light/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container max-w-7xl mx-auto px-4 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm mb-6 border border-makwana-mid/20"
          >
            <ShieldAlert className="text-makwana-mid w-5 h-5" />
            <span className="text-sm font-semibold text-makwana-dark tracking-wide uppercase">Expert Legal Defense</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-gray-900 leading-tight mb-6 drop-shadow-sm">
            Facing Prosecution? <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-makwana-dark to-makwana-mid">
              We Protect Your Future.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-800 mb-8 max-w-lg leading-relaxed font-medium">
            Specialist solicitors for <span className="font-semibold text-makwana-dark">Fare Evasion</span>, <span className="font-semibold text-makwana-dark">Blue Badge Fraud</span>, and <span className="font-semibold text-makwana-dark">Criminal Defense</span>. We fight to avoid criminal records.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <motion.a 
              href="#contact"
              animate={{ 
                boxShadow: [
                  "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)", // Default shadow
                  "0 0 0 4px rgba(142, 28, 102, 0.3)", // Pulse ring
                  "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)" // Back to default
                ],
                scale: [1, 1.02, 1]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut" 
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-makwana-dark text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-makwana-dark/20 flex items-center justify-center gap-2"
            >
              Get Free Assessment
              <ArrowRight size={20} />
            </motion.a>
            <motion.a 
              href="#services"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/90 backdrop-blur-sm text-makwana-dark border-2 border-makwana-dark/10 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white flex items-center justify-center shadow-sm"
            >
              Our Services
            </motion.a>
          </div>
        </motion.div>

        {/* Visual/Interactive Element */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden md:block"
        >
           <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Backing Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-makwana-dark to-makwana-light rounded-3xl opacity-10 rotate-3 transform blur-sm"></div>
              
              <div className="absolute inset-0 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl flex flex-col items-center justify-center p-8 border border-white/40 overflow-hidden">
                {/* Simulated Chat Interface for Visual Interest */}
                <div className="w-full space-y-4">
                   <motion.div 
                     initial={{ x: -20, opacity: 0 }}
                     animate={{ x: 0, opacity: 1 }}
                     transition={{ delay: 1 }}
                     className="bg-gray-100 p-3 rounded-lg rounded-tl-none w-3/4 mr-auto text-sm text-gray-800"
                   >
                     I received a Single Justice Procedure Notice for fare evasion. Will I get a criminal record?
                   </motion.div>
                   <motion.div 
                     initial={{ x: 20, opacity: 0 }}
                     animate={{ x: 0, opacity: 1 }}
                     transition={{ delay: 2 }}
                     className="bg-makwana-mid/10 text-makwana-dark p-3 rounded-lg rounded-tr-none w-3/4 ml-auto text-sm font-medium border border-makwana-mid/10"
                   >
                     We can often negotiate an out-of-court settlement to avoid a criminal record. Let's discuss your case immediately.
                   </motion.div>
                   <motion.div 
                     initial={{ x: -20, opacity: 0 }}
                     animate={{ x: 0, opacity: 1 }}
                     transition={{ delay: 3.5 }}
                     className="bg-gray-100 p-3 rounded-lg rounded-tl-none w-2/3 mr-auto text-sm text-gray-800"
                   >
                     That is a huge relief. How do we start?
                   </motion.div>
                </div>
                
                {/* Overlay Badge */}
                <motion.div 
                   animate={{ y: [0, -10, 0] }}
                   transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                   className="absolute bottom-8 right-8 bg-white p-4 rounded-2xl shadow-xl border border-makwana-light/20 flex items-center gap-3"
                >
                   <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                     <ShieldAlert className="text-green-600 w-6 h-6" />
                   </div>
                   <div>
                     <p className="text-xs text-gray-500 font-semibold uppercase">Success Rate</p>
                     <p className="text-xl font-bold text-gray-900">98%+</p>
                   </div>
                </motion.div>
              </div>
           </div>
        </motion.div>

      </div>
      
      {/* Scroll Down Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 border-2 border-makwana-dark/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-makwana-dark/50 rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;