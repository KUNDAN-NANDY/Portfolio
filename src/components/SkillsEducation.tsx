import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Code2 } from 'lucide-react';
import resumeData from '../data/resume.json';

export const SkillsEducation: React.FC = () => {
  const { skills, education } = resumeData;

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills-education" className="py-24 px-6 md:px-12 lg:px-24 relative z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Skills Section */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-10 flex items-center gap-4"
          >
            <div className="p-3 bg-indigo-500/10 rounded-xl text-indigo-400">
              <Code2 size={28} />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white">Skills & Expertise</h2>
            </div>
          </motion.div>

          <div className="space-y-8">
            {Object.entries(skills).map(([category, items], idx) => (
              <motion.div 
                key={category}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <h3 className="text-lg font-semibold text-slate-300 uppercase tracking-wider mb-4">
                  {category}
                </h3>
                <motion.div 
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="flex flex-wrap gap-3"
                >
                  {items.map((skill, i) => (
                    <motion.span
                      key={i}
                      variants={itemVariants}
                      className="px-4 py-2 bg-slate-900 border border-slate-700/50 rounded-full text-sm font-medium text-slate-200 hover:border-indigo-500/50 hover:bg-slate-800 transition-colors cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-10 flex items-center gap-4"
          >
            <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-400">
              <GraduationCap size={28} />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white">Education</h2>
            </div>
          </motion.div>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-900/40 backdrop-blur-sm border border-slate-800 p-6 rounded-2xl hover:border-cyan-500/30 transition-colors"
              >
                <h3 className="text-xl font-bold text-white mb-2">{edu.institution}</h3>
                <p className="text-cyan-400 font-medium mb-2">{edu.degree}</p>
                {edu.dates && (
                  <p className="text-sm text-slate-500 font-medium">{edu.dates}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
