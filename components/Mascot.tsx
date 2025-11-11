
import React from 'react';

interface MascotProps {
  expression?: 'happy' | 'thinking' | 'excited';
}

const Mascot: React.FC<MascotProps> = ({ expression = 'happy' }) => {
  const eyeClass = "absolute w-5 h-8 bg-white rounded-full flex items-center justify-center overflow-hidden";
  const pupilClass = "w-3 h-3 bg-gray-800 rounded-full";

  const expressions = {
    happy: (
      <>
        <div className={`${eyeClass} top-6 left-6 -rotate-12`}>
          <div className={`${pupilClass} self-end mb-1`}></div>
        </div>
        <div className={`${eyeClass} top-6 right-6 rotate-12`}>
          <div className={`${pupilClass} self-end mb-1`}></div>
        </div>
        <div className="absolute bottom-7 left-1/2 transform -translate-x-1/2 w-8 h-4 border-b-4 border-white rounded-full"></div>
      </>
    ),
    thinking: (
      <>
        <div className={`${eyeClass} top-6 left-5 -rotate-6`}>
           <div className={`${pupilClass} self-center -ml-1`}></div>
        </div>
        <div className={`${eyeClass} top-5 right-5 scale-y-95 scale-x-105 rotate-6`}>
           <div className={`${pupilClass} self-center -mr-1`}></div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-white rounded-full"></div>
      </>
    ),
    excited: (
      <>
        <div className={`${eyeClass} top-5 left-5 -rotate-12`}>
            <div className={`${pupilClass} w-4 h-4`}></div>
        </div>
        <div className={`${eyeClass} top-5 right-5 rotate-12`}>
            <div className={`${pupilClass} w-4 h-4`}></div>
        </div>
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-12 h-8 bg-white/80 rounded-b-full overflow-hidden">
            <div className="w-full h-full bg-pink-300/80 mt-2"></div>
        </div>
      </>
    )
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-28 h-28 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full shadow-lg">
        <div className="absolute inset-0 rounded-full shadow-[inset_0_8px_12px_rgba(255,255,255,0.3),_inset_0_-8px_12px_rgba(0,0,0,0.2)]"></div>
        {expressions[expression]}
      </div>
    </div>
  );
};

export default Mascot;
