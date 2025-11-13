import React from 'react';

// --- ICONS ---
const PersonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
  </svg>
);
const GroupIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
    </svg>
);
const HelpingHandIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22V9"/>
    </svg>
);
const ShieldIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
);
const PlusIcon = () => <span className="text-3xl font-bold text-gray-500">+</span>;
const MergeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8L22 12L18 16"/>
        <path d="M2 12H22"/>
        <path d="M11 2L7 6L11 10"/>
        <path d="M16 18L12 22L8 18"/>
        <path d="M2 6H7C9.20914 6 11 7.79086 11 10V22"/>
    </svg>
);
const MagnifyIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/>
        <line x1="21" y1="21" x2="16.65" y2="16.65"/>
    </svg>
);
const ForkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600 -rotate-90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19V5"/>
        <path d="M5 12l7-7 7 7"/>
    </svg>
);
const CloudIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
    </svg>
);
const ParenthesesIcon = () => <span className="text-4xl font-bold text-gray-400">( )</span>;
const BackwardArrowIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 12H5"/>
        <path d="M12 19l-7-7 7-7"/>
    </svg>
);
const BoxIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
        <line x1="12" y1="22.08" x2="12" y2="12"/>
    </svg>
);
const ContainerIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
        <path d="M12 2v4"/>
        <path d="M12 12l-4 4"/>
        <path d="M12 12l4-4"/>
    </svg>
);
const TrophyIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L12 2C16.9706 2 21 6.02944 21 11L21 11"/>
        <path d="M12 2L12 2C7.02944 2 3 6.02944 3 11L3 11"/>
        <path d="M12 22V11"/>
        <path d="M7 11H17"/>
        <path d="M17 11C17 13.7614 14.7614 16 12 16C9.23858 16 7 13.7614 7 11"/>
    </svg>
);
const PuzzleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <path d="M14 2v6h6"/>
        <path d="M12 18v-4"/>
        <path d="M10 16h4"/>
    </svg>
);
const ClockIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 6v6l4 2"/>
    </svg>
);
const BookIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
    </svg>
);
const ScissorsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="6" cy="6" r="3"/>
        <circle cx="6" cy="18" r="3"/>
        <line x1="20" y1="4" x2="8.12" y2="15.88"/>
        <line x1="14.47" y1="14.48" x2="20" y2="20"/>
        <line x1="8.12" y1="8.12" x2="12" y2="12"/>
    </svg>
);
const LinkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72"/>
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72"/>
    </svg>
);
const CloudWishIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
        <path d="M12 12l-2 3h4l-2 3"/>
    </svg>
);
const SwapIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 3l4 4l-4 4"/>
        <path d="M20 7H4"/>
        <path d="M8 21l-4-4l4-4"/>
        <path d="M4 17H20"/>
    </svg>
);
const ScatterIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="5" cy="5" r="2"/>
        <circle cx="12" cy="6" r="1.5"/>
        <circle cx="19" cy="5" r="2"/>
        <circle cx="5" cy="12" r="1.5"/>
        <circle cx="12" cy="12" r="2"/>
        <circle cx="19" cy="12" r="1.5"/>
        <circle cx="5" cy="19" r="2"/>
        <circle cx="12" cy="18" r="1.5"/>
        <circle cx="19" cy="19" r="2"/>
    </svg>
);
const HashIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="4" y1="9" x2="20" y2="9"/>
        <line x1="4" y1="15" x2="20" y2="15"/>
        <line x1="10" y1="3" x2="8" y2="21"/>
        <line x1="16" y1="3" x2="14" y2="21"/>
    </svg>
);

// --- BASE INFOGRAPHIC LAYOUT ---
export const InfographicContainer: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="my-8 p-4 md:p-6 bg-slate-50 rounded-2xl border border-slate-200">
      <h3 className="text-xl font-bold text-gray-800 mb-4 text-center font-poppins">{title}</h3>
      <div className="grid md:grid-cols-2 gap-4 md:gap-6 items-start">
        {children}
      </div>
    </div>
);
export const InfoCard: React.FC<{ bgColor: string; borderColor: string; title: string; subtitle: string; icon: React.ReactNode; children: React.ReactNode }> = ({ bgColor, borderColor, title, subtitle, icon, children }) => (
    <div className={`${bgColor} p-4 rounded-xl border-2 ${borderColor} text-center`}>
        <div className="flex justify-center mb-2">{icon}</div>
        <h4 className={`font-bold text-lg text-${borderColor.split('-')[1]}-800 font-poppins`}>{title}</h4>
        <p className={`text-sm text-${borderColor.split('-')[1]}-700`}>{subtitle}</p>
        {children}
    </div>
);
export const Arrow = ({ color = 'blue' }) => <div className={`text-4xl my-3 text-${color}-400`}>↓</div>;
export const VerbBox: React.FC<{ text: string; color: string }> = ({ text, color }) => (
    <div className="bg-white p-3 rounded-lg shadow-inner">
        <p className={`font-mono font-bold text-${color}-900`}>{text}</p>
    </div>
);
export const ExampleBox: React.FC<{ text: React.ReactNode; color: string }> = ({ text, color }) => (
    <div className={`mt-4 bg-white p-3 rounded-lg border-l-4 border-${color}-500 text-left shadow-sm`}>
        <p className="font-semibold text-gray-700">Example:</p>
        <p className="text-gray-600">{text}</p>
    </div>
);

// --- ICONS EXPORT ---
export { PersonIcon, GroupIcon, HelpingHandIcon, ShieldIcon, PlusIcon, MergeIcon, MagnifyIcon, ForkIcon, CloudIcon, ParenthesesIcon, BackwardArrowIcon, BoxIcon, ContainerIcon, TrophyIcon, PuzzleIcon, ClockIcon, BookIcon, ScissorsIcon, LinkIcon, CloudWishIcon, SwapIcon, ScatterIcon, HashIcon };
