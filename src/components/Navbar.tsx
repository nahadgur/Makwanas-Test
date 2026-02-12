'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { NAV_ITEMS, CONTACT_PHONE } from '@/constants';
import Logo from '@/components/Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || isOpen 
            ? 'bg-white/95 backdrop-blur-xl shadow-md py-3' 
            : 'bg-gradient-to-b from-white/80 to-transparent py-5 backdrop-blur-[2px]'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <a href="#" className="z-50 relative">
            {/* Logo uses 'dark' variant (brand colors) to contrast against the white/light navbar */}
            <Logo variant="dark" />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-medium text-gray-700 hover:text-makwana-mid transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-makwana-mid transition-all group-hover:w-full"></span>
              </a>
            ))}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`}
              className="px-5 py-2.5 rounded-full font-bold transition-all flex items-center gap-2 shadow-lg bg-makwana-mid hover:bg-makwana-dark text-white shadow-makwana-mid/30"
            >
              <Phone size={18} />
              <span>Call Now</span>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 z-50 focus:outline-none text-makwana-dark"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-white flex flex-col justify-center items-center md:hidden"
          >
            <div className="flex flex-col space-y-8 text-center w-full px-8">
              {NAV_ITEMS.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className="text-3xl font-display font-bold text-gray-800 hover:text-makwana-mid"
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + (index * 0.1) }}
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.a
                 href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`}
                 className="mt-8 bg-makwana-mid text-white w-full py-4 rounded-xl text-xl font-bold flex items-center justify-center gap-3 shadow-xl shadow-makwana-mid/20"
                 onClick={() => setIsOpen(false)}
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.4 }}
              >
                <Phone size={24} />
                {CONTACT_PHONE}
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;