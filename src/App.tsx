/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { AnimatedBackground } from './components/AnimatedBackground';
import { Splash } from './components/Splash';
import { Hero } from './components/Hero';
import { Impact } from './components/Impact';
import { Experience } from './components/Experience';
import { SkillsEducation } from './components/SkillsEducation';
import resumeData from './data/resume.json';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Lock scroll while splash is showing
    if (showSplash) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [showSplash]);

  return (
    <div className="bg-slate-950 min-h-screen text-slate-200 selection:bg-indigo-500/30 selection:text-indigo-200 font-sans">
      {showSplash && <Splash onComplete={() => setShowSplash(false)} />}
      
      <AnimatedBackground />

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-cyan-400 to-indigo-500 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Main Content */}
      <div className={`${showSplash ? 'opacity-0' : 'opacity-100'} transition-opacity duration-1000`}>
        <Hero />
        <Impact />
        <Experience />
        <SkillsEducation />
        
        {/* Footer */}
        <footer className="py-8 text-center text-slate-500 text-sm relative z-10 border-t border-slate-800/50 mt-12 bg-slate-950/80 backdrop-blur-md">
          <p>© {new Date().getFullYear()} {resumeData.basics.name}. Built with React, Tailwind & Framer Motion.</p>
        </footer>
      </div>
    </div>
  );
}
