import React from 'react';
import { InfographicContainer } from './InfographicComponents.tsx';

export const Rule8Infographic: React.FC = () => (
    <InfographicContainer title="Visualizing Additive Phrases">
         <div className="md:col-span-2 text-center">
            <p className="font-bold text-lg text-slate-800 font-poppins">The <span className="text-blue-600">teacher</span><span className="text-gray-400">, along with the students,</span> <span className="text-blue-600">is</span> here.</p>
            <div className="flex justify-center items-center my-4">
                <span className="font-bold text-blue-600">Subject</span>
                <span className="text-4xl text-gray-400 mx-4">( ... )</span>
                <span className="font-bold text-blue-600">Verb</span>
            </div>
            <p className="text-slate-600">Additive phrases are parenthetical. The verb agrees with the first subject only.</p>
        </div>
    </InfographicContainer>
);
