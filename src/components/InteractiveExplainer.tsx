'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { EXPLAINER_STEPS } from '@/constants';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const InteractiveExplainer: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState(0);
  const containerRef = useRef<HTMLElement>(null);
  
  // Use Framer Motion's useInView hook. 
  // amount: 0.5 means the animation starts when 50% of the component is visible
  const isInView = useInView(containerRef, { amount: 0.5 });

  const nextStep = useCallback(() => {
    setDirection(1);
    setCurrentStep((prev) => (prev === EXPLAINER_STEPS.length - 1 ? 0 : prev + 1));
  }, []);

  const prevStep = () => {
    if (currentStep > 0) {
      setDirection(-1);
      setCurrentStep(currentStep - 1);
    }
  };

  useEffect(() => {
    // Only run the interval if the user has scrolled to this section
    if (!isInView) return;

    const interval = setInterval(() => {
      nextStep();
    }, 5000);
    return () => clearInterval(interval);
  }, [nextStep, currentStep, isInView]); 

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95,
    }),
  };

  return (
    <section ref={containerRef} className="py-24 bg-gradient-to-b from-makwana-bg to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-makwana-dark mb-4">How We Resolve Your Case</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Understanding the process reduces anxiety. We guide you through every step of the defense strategy.</p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Main Carousel Area */}
          <div className="relative h-[550px] md:h-[450px] flex items-center justify-center">
            
            {/* Left Button - Desktop */}
            <button 
              onClick={prevStep}
              disabled={currentStep === 0}
              className="absolute left-0 md:-left-12 z-20 p-3 rounded-full bg-white text-makwana-dark shadow-lg border border-gray-100 disabled:opacity-30 hover:bg-makwana-mid hover:text-white transition-all hidden md:flex"
            >
              <ChevronLeft size={32} />
            </button>

            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentStep}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                  scale: { duration: 0.2 }
                }}
                className="absolute w-full md:w-[80%] h-full left-0 right-0 mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100"
              >
                <div className="grid md:grid-cols-2 h-full">
                  {/* Visual Side - Image */}
                  <div className="relative h-[250px] md:h-full w-full overflow-hidden">
                    <img 
                       src={EXPLAINER_STEPS[currentStep].image} 
                       alt={EXPLAINER_STEPS[currentStep].title}
                       className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                    {/* Overlay to ensure text legibility if we ever add it, or just for style */}
                    <div className="absolute inset-0 bg-makwana-dark/20 mix-blend-multiply"></div>
                  </div>

                  {/* Content Side */}
                  <div className="p-8 md:p-12 flex flex-col justify-center h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-makwana-bg text-makwana-mid font-bold px-3 py-1 rounded-full text-xs uppercase tracking-wider">
                        Step {currentStep + 1} of {EXPLAINER_STEPS.length}
                      </span>
                    </div>
                    
                    <motion.h3 
                      className="text-2xl md:text-3xl font-bold text-gray-900 mb-4"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      {EXPLAINER_STEPS[currentStep].title}
                    </motion.h3>
                    
                    <motion.p 
                      className="text-gray-600 text-lg leading-relaxed"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      {EXPLAINER_STEPS[currentStep].description}
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Right Button - Desktop */}
            <button 
              onClick={nextStep}
              className="absolute right-0 md:-right-12 z-20 p-3 rounded-full bg-white text-makwana-dark shadow-lg border border-gray-100 hover:bg-makwana-mid hover:text-white transition-all hidden md:flex"
            >
              <ChevronRight size={32} />
            </button>
          </div>

          {/* Mobile Navigation Controls */}
          <div className="flex md:hidden justify-between items-center mt-8 px-4">
            <button 
              onClick={prevStep}
              disabled={currentStep === 0}
              className="p-3 rounded-full bg-white shadow-md border border-gray-100 disabled:opacity-30 text-makwana-dark"
            >
              <ChevronLeft size={24} />
            </button>
            <span className="font-bold text-gray-500 text-sm">
              {currentStep + 1} / {EXPLAINER_STEPS.length}
            </span>
            <button 
              onClick={nextStep}
              className="p-3 rounded-full bg-makwana-mid shadow-md border border-makwana-mid text-white disabled:opacity-30"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center gap-3 mt-8 md:mt-12">
            {EXPLAINER_STEPS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > currentStep ? 1 : -1);
                  setCurrentStep(idx);
                }}
                className={`transition-all duration-300 rounded-full ${
                  idx === currentStep 
                    ? 'w-10 h-3 bg-makwana-mid' 
                    : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to step ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveExplainer;