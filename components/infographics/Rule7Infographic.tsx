import React from 'react';
import { InfographicContainer } from './InfographicComponents.tsx';

export const Rule7Infographic: React.FC = () => (
    <InfographicContainer title="Visualizing Intervening Phrases">
        <div className="md:col-span-2 text-center">
            <p className="font-bold text-lg text-slate-800 font-poppins">The <span className="text-blue-600">list</span> <span className="text-gray-400">of items</span> <span className="text-blue-600">is</span> on the table.</p>
            <div className="flex justify-center items-center my-4">
                <span className="font-bold text-blue-600">Subject</span>
                <svg width="200" height="50" className="mx-4">
                    <path d="M 10 25 Q 100 -15 190 25" stroke="#3b82f6" fill="none" strokeWidth="2" strokeDasharray="5,5" />
                    <text x="100" y="15" textAnchor="middle" fill="#9ca3af">ignore this</text>
                </svg>
                <span className="font-bold text-blue-600">Verb</span>
            </div>
            <p className="text-slate-600">The verb must agree with the main subject, ignoring the phrase in the middle.</p>
        </div>
    </InfographicContainer>
);
