import React from 'react';
import ShadowGeneratorProvider from '../context/shadow-generator-context';
import ShadowGeneratorAdd from './shadow-generator-add';

const ShadowGenerator: React.FC = () => {
  return (
    <ShadowGeneratorProvider>
      <div className="flex flex-col bg-gray-100 p-4 rounded-lg">
        <ShadowGeneratorAdd />
        <ShadowGeneratorShadows />
      </div>
    </ShadowGeneratorProvider>
  );
};

export default ShadowGenerator;
