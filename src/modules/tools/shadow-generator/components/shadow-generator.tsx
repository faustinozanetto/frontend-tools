import React from 'react';
import ShadowGeneratorProvider from '../context/shadow-generator-context';

const ShadowGenerator: React.FC = () => {
  return (
    <ShadowGeneratorProvider>
      <div className="flex flex-col bg-gray-100 p-4 rounded-lg">
        
      </div>
    </ShadowGeneratorProvider>
  );
};

export default ShadowGenerator;
