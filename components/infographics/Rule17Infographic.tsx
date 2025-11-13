import React from 'react';
import { InfographicContainer } from './InfographicComponents.tsx';

export const Rule17Infographic: React.FC = () => (
    <InfographicContainer title="Visualizing Relative Pronouns">
        <div className="md:col-span-2 text-center">
            <p className="font-bold text-lg text-slate-800 font-poppins">The <span className="text-blue-600">cat</span> that <span className="text-blue-600">jumps</span>...</p>
            <div className="flex justify-center items-center my-4">
                <span className="font-bold text-blue-600">Antecedent</span>
                <svg width="200" height="50" className="mx-4">
                    <path d="M 10 25 C 50 5, 150 5, 190 25" stroke="#3b82f6" fill="none" strokeWidth="2" />
                    <text x="100" y="18" textAnchor="middle" fill="#64748b">'that' refers to 'cat'</text>
                    <path d="M 190 25 L 180 20 M 190 25 L 180 30" stroke="#3b82f6" fill="none" strokeWidth="2" />
                </svg>
                <span className="font-bold text-blue-600">Verb</span>
            </div>
            <p className="text-slate-600">The verb agrees with the antecedent that the relative pronoun refers to.</p>
        </div>
    </InfographicContainer>
);
