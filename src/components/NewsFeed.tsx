'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { NEWS_ITEMS } from '@/constants';
import { Newspaper, Clock, ExternalLink } from 'lucide-react';

const NewsFeed: React.FC = () => {
  return (
    <section className="bg-gray-900 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-8 text-white">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
          <h3 className="font-bold text-lg uppercase tracking-wider flex items-center gap-2">
            <Newspaper size={18} /> Legal News Feed
          </h3>
        </div>

        {/* Horizontal Scroll / Ticker */}
        <div className="relative overflow-hidden">
          <motion.div 
            className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x"
            drag="x"
            dragConstraints={{ right: 0, left: -600 }}
          >
            {NEWS_ITEMS.map((item) => (
              <motion.div 
                key={item.id}
                className="min-w-[300px] md:min-w-[400px] bg-gray-800 p-6 rounded-xl border border-gray-700 flex-shrink-0 snap-center hover:border-makwana-mid transition-colors cursor-pointer group"
                whileHover={{ y: -5 }}
              >
                 <div className="flex justify-between items-start mb-3">
                   <span className="text-xs font-bold text-makwana-mid uppercase px-2 py-1 bg-makwana-mid/10 rounded">
                     {item.category}
                   </span>
                   <span className="flex items-center gap-1 text-xs text-gray-500">
                     <Clock size={12} /> {item.date}
                   </span>
                 </div>
                 <h4 className="text-white font-bold text-lg mb-2 group-hover:text-makwana-light transition-colors line-clamp-2">
                   {item.title}
                 </h4>
                 <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                   {item.summary}
                 </p>
                 <span className="text-sm text-gray-300 group-hover:underline flex items-center gap-1">
                   Read full update <ExternalLink size={12} />
                 </span>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Fade effect on right for visual cue */}
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-900 to-transparent pointer-events-none md:hidden"></div>
        </div>
      </div>
    </section>
  );
};

export default NewsFeed;