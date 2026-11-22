import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <div className="bg-[#10100F] text-[#EAE4D9] min-h-screen flex items-center justify-center pt-24 pb-16 px-6">
      <div className="max-w-md w-full text-center space-y-6">
        <span className="text-xs uppercase font-mono tracking-[0.3em] text-[#C5AE8B] block">
          Anomaly · Uncharted Chamber
        </span>
        <h1 className="font-serif text-6xl sm:text-7xl font-light text-[#EAE4D9]">
          404
        </h1>
        <p className="text-sm text-[#77736A] font-light leading-relaxed">
          The subterranean coordinate you seek does not exist within the Mount Sahyadri geological survey.
        </p>
        <div className="pt-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#C5AE8B] text-[#10100F] text-xs uppercase font-mono tracking-widest hover:bg-[#DFCDB4] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Ascend to Sanctuary Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
