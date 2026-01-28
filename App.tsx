import React, { useState } from 'react';
import ParticleBackground from './components/ParticleBackground';
import TechSpecs from './components/MaintenanceStatus';
import { CONTENT_ZH, CONTENT_EN } from './constants';
import { Language } from './types';
import { Globe, Aperture, Terminal } from 'lucide-react';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('zh');
  const content = lang === 'zh' ? CONTENT_ZH : CONTENT_EN;

  const toggleLanguage = () => {
    setLang(prev => prev === 'zh' ? 'en' : 'zh');
  };

  return (
    <div className="relative min-h-screen text-slate-200 selection:bg-amber-500/30 selection:text-amber-100 font-mono">
      {/* Dynamic Background */}
      <ParticleBackground />

      {/* Main Container */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen p-6 md:p-12 overflow-hidden">
        
        {/* Header: Logo & Lang Switch */}
        <div className="absolute top-0 left-0 w-full p-6 md:p-8 flex justify-between items-center z-50">
            <div className="flex items-center gap-3 opacity-90 hover:opacity-100 transition-opacity cursor-default">
              <div className="w-8 h-8 rounded bg-amber-500 flex items-center justify-center shadow-[0_0_15px_rgba(245,158,11,0.3)]">
                 <Aperture className="text-black w-5 h-5 animate-spin-slow" />
              </div>
              <div className="flex flex-col">
                  <span className="text-sm font-bold tracking-[0.1em] text-white leading-none">LUCKY</span>
                  <span className="text-[10px] font-bold tracking-[0.2em] text-amber-500 leading-none">LUT CAMERA</span>
              </div>
            </div>

            <button 
                onClick={toggleLanguage}
                className="flex items-center gap-2 px-3 py-1 text-xs font-medium transition-colors text-slate-500 hover:text-amber-400 border border-transparent hover:border-amber-900/50 rounded-full"
            >
                <Globe className="w-3 h-3" />
                <span className={lang === 'en' ? 'text-amber-100' : ''}>EN</span>
                <span>/</span>
                <span className={lang === 'zh' ? 'text-amber-100' : ''}>中文</span>
            </button>
        </div>

        {/* Content Wrapper */}
        <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-32 mt-12 lg:mt-0">
          
          {/* Left Column: Text */}
          <div className="flex-1 text-center lg:text-left space-y-10 animate-fade-in relative">
            {/* Decorator Line */}
            <div className="hidden lg:block absolute -left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-amber-700/50 to-transparent"></div>

            <div className="inline-block">
                <div className="flex items-center gap-2 text-amber-500/80 text-[10px] uppercase tracking-[0.3em] mb-2 justify-center lg:justify-start">
                    <span className="w-2 h-2 bg-amber-500 rounded-sm animate-pulse shadow-[0_0_10px_rgba(245,158,11,0.5)]"></span>
                    {content.tagline}
                </div>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-200 to-slate-600">
                    {content.title}
                </h1>
            </div>

            <div className="space-y-6">
                <h2 className="text-lg md:text-xl text-amber-500/90 font-light tracking-widest flex items-center justify-center lg:justify-start gap-3">
                    <Terminal className="w-4 h-4" />
                    {content.subtitle}
                </h2>
                <p className="text-base text-slate-400 leading-loose max-w-xl mx-auto lg:mx-0 font-light">
                {content.description}
                </p>
            </div>

            {/* Cryptic Feature List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-8 max-w-md mx-auto lg:mx-0 pt-2 opacity-80">
                {content.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-slate-500 font-mono text-xs hover:text-amber-400 transition-colors cursor-help group">
                        <span className="text-amber-900 group-hover:text-amber-500">➜</span>
                        <span>{feature}</span>
                    </div>
                ))}
            </div>
          </div>

          {/* Right Column: Abstract Wireframe (Yellow Theme) */}
          <div className="flex-1 w-full max-w-md lg:max-w-lg">
            <div className="relative aspect-square w-full">
                
                {/* Wireframe Container */}
                <div className="absolute inset-0 border border-slate-800 bg-black/60 backdrop-blur-sm p-8 flex flex-col justify-between group hover:border-amber-500/30 transition-colors duration-700">
                    
                    {/* Top Markers */}
                    <div className="flex justify-between items-start">
                        <div className="space-y-1">
                            <div className="w-2 h-2 border border-amber-500/50"></div>
                            <div className="w-2 h-2 border border-amber-500/30"></div>
                        </div>
                        <div className="text-[10px] text-amber-900/50 font-mono tracking-widest group-hover:text-amber-500/50 transition-colors">
                            FIG 0.1 // SCHEMATIC
                        </div>
                    </div>

                    {/* Central Diagram */}
                    <div className="relative flex-1 flex items-center justify-center">
                        {/* Outer Circle */}
                        <div className="absolute w-48 h-48 border border-slate-800 rounded-full animate-[spin_10s_linear_infinite]"></div>
                        <div className="absolute w-48 h-48 border-t border-b border-amber-900/30 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                        
                        {/* Inner Square */}
                        <div className="relative w-32 h-32 border border-slate-700 flex items-center justify-center rotate-45 group-hover:rotate-0 transition-transform duration-1000">
                            <div className="w-full h-px bg-slate-800 absolute top-1/2 -translate-y-1/2"></div>
                            <div className="h-full w-px bg-slate-800 absolute left-1/2 -translate-x-1/2"></div>
                            <div className="w-16 h-16 border border-amber-500/20 bg-amber-500/5 backdrop-blur-md"></div>
                        </div>

                        {/* Scanline */}
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-transparent via-amber-500/5 to-transparent animate-scan"></div>
                    </div>

                    {/* Bottom Data */}
                    <div className="flex justify-between items-end border-t border-slate-800 pt-4">
                        <div className="flex gap-4 text-[10px] text-slate-600 font-mono">
                            <span>X: 00.00</span>
                            <span>Y: 00.00</span>
                            <span>Z: 00.00</span>
                        </div>
                        <div className="w-4 h-4 border-r border-b border-amber-500/50"></div>
                    </div>
                </div>

                {/* Background Decor */}
                <div className="absolute -inset-4 border border-dashed border-slate-800/50 -z-10 opacity-50"></div>
                <div className="absolute -inset-4 border-l border-t border-slate-700 w-8 h-8 -z-10"></div>
                <div className="absolute -bottom-4 -right-4 border-r border-b border-slate-700 w-8 h-8 -z-10"></div>

            </div>
          </div>

        </div>

        {/* Tech Specs Section */}
        <TechSpecs content={content.techSpecs} />

        {/* Footer */}
        <footer className="absolute bottom-6 text-center w-full z-10 opacity-30 hover:opacity-100 transition-opacity">
           <p className="text-[10px] font-mono tracking-[0.3em] text-slate-500">
             {content.footer}
           </p>
        </footer>

      </main>
    </div>
  );
};

export default App;