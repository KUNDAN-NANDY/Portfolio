import React from 'react';
import { motion } from 'motion/react';
import { Download, ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import resumeData from '../data/resume.json';

export const Hero: React.FC = () => {
  const { name, title, summary, links, email } = resumeData.basics;

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-20">
      <div className="max-w-4xl z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-indigo-400 font-medium tracking-wide mb-3">{title}</h2>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Hi, I'm {name.split(' ')[0]}.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-500">
              I build systems that scale.
            </span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl mb-10">
            {summary}
          </p>
          
          <div className="flex flex-wrap gap-4 items-center">
            <a
              href="#experience"
              onClick={(e) => handleScroll(e, 'experience')}
              className="px-8 py-3 rounded-full bg-indigo-500 hover:bg-indigo-600 text-white font-medium transition-all shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] flex items-center gap-2"
            >
              View Experience
            </a>
            <button
              onClick={() => window.open('https://drive.google.com/uc?export=download&id=1j05L0i53FAaIEneimeug_qH6crf2SqXD', 'Resume')}
              className="px-8 py-3 rounded-full bg-slate-800/50 hover:bg-slate-800 border border-slate-700 text-white font-medium backdrop-blur-sm transition-all flex items-center gap-2"
            >
              <Download size={18} /> Download Resume
            </button>
          </div>

          <div className="flex items-center gap-6 mt-12">
            <a href={`https://${links.github}`} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <Github size={24} />
            </a>
            <a href={`https://${links.linkedin}`} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <Linkedin size={24} />
            </a>
            <a href={`mailto:${email}`} className="text-slate-400 hover:text-white transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <a href="#impact" onClick={(e) => handleScroll(e, 'impact')} className="text-slate-400 hover:text-white flex flex-col items-center gap-2 animate-bounce">
          <span className="text-sm uppercase tracking-widest">Scroll</span>
          <ChevronDown size={20} />
        </a>
      </motion.div>
    </section>
  );
};
