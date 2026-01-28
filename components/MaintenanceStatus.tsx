import React from 'react';
import { Cpu, FileJson, Grid3X3, Zap } from 'lucide-react';
import { AppContent } from '../types';

interface TechSpecsProps {
  content: AppContent['techSpecs'];
}

const SpecItem: React.FC<{ icon: React.ReactNode; label: string; value: string }> = ({ icon, label, value }) => {
  return (
    <div className="flex items-center gap-3 p-3 rounded-lg border border-slate-800 bg-slate-900/40 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-amber-500/30 cursor-default group">
      <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-amber-500 group-hover:text-black group-hover:bg-amber-500 transition-colors">
        {icon}
      </div>
      <div className="flex flex-col">
        <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500">{label}</span>
        <span className="text-sm font-bold text-slate-200">{value}</span>
      </div>
    </div>
  );
};

const TechSpecs: React.FC<TechSpecsProps> = ({ content }) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-5xl mx-auto mt-12">
       <SpecItem 
         icon={<Cpu className="w-4 h-4" />} 
         label="ENGINE" 
         value={content.engine} 
       />
       <SpecItem 
         icon={<FileJson className="w-4 h-4" />} 
         label="FORMAT" 
         value={content.format} 
       />
       <SpecItem 
         icon={<Grid3X3 className="w-4 h-4" />} 
         label="QUALITY" 
         value={content.precision} 
       />
       <SpecItem 
         icon={<Zap className="w-4 h-4" />} 
         label="SHADER" 
         value={content.shader} 
       />
    </div>
  );
};

export default TechSpecs;