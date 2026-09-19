import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Calendar, MapPin, Building2 } from 'lucide-react';
import resumeData from '../data/resume.json';

export const Experience: React.FC = () => {
  const { experience } = resumeData;
  const [expandedId, setExpandedId] = useState<number>(0);

  return (
    <section id="experience" className="py-24 px-6 md:px-12 lg:px-24 relative z-10 bg-slate-950/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full" />
        </motion.div>

        <div className="space-y-6">
          {experience.map((job, index) => {
            const isExpanded = expandedId === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-slate-900/60 backdrop-blur-sm border rounded-2xl overflow-hidden transition-colors duration-300 ${isExpanded ? 'border-indigo-500/50' : 'border-slate-800'}`}
              >
                <button
                  onClick={() => setExpandedId(isExpanded ? -1 : index)}
                  className="w-full text-left p-6 md:p-8 flex items-center justify-between group"
                >
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {job.role}
                    </h3>
                    <div className="flex flex-wrap gap-4 mt-3 text-sm text-slate-400 font-medium">
                      <span className="flex items-center gap-1.5 text-indigo-400"><Building2 size={16} /> {job.company}</span>
                      <span className="flex items-center gap-1.5"><Calendar size={16} /> {job.dates}</span>
                      <span className="flex items-center gap-1.5"><MapPin size={16} /> {job.location}</span>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="ml-4 w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 flex-shrink-0"
                  >
                    <ChevronDown size={20} />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                      <div className="p-6 md:p-8 pt-0 text-slate-300 border-t border-slate-800/50 mt-2">
                        <ul className="space-y-4">
                          {job.bullets.map((bullet, i) => (
                            <li key={i} className="flex items-start">
                              <span className="mr-4 mt-2 w-1.5 h-1.5 bg-indigo-500 rounded-full flex-shrink-0 shadow-[0_0_8px_rgba(99,102,241,0.8)]" />
                              <span className="leading-relaxed">{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
