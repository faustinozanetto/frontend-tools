import React from 'react';
import ShadowGeneratorProvider from '../context/shadow-generator-context';
import ShadowGeneratorAdd from './shadow-generator-add';
import ShadowGeneratorShadows from './shadow-generator-shadows';

const ShadowGenerator: React.FC = () => {
  return (
    <ShadowGeneratorProvider>
      <div className="flex flex-col bg-gray-100 p-4 rounded-lg space-y-2 sm:space-y-4">
        <ShadowGeneratorAdd />
        <ShadowGeneratorShadows />
      </div>
    </ShadowGeneratorProvider>
  );
};

export default ShadowGenerator;
