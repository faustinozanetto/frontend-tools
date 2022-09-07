import React from 'react';
import GradientGeneratorProvider from '../context/gradient-generator-context';
import GradientGeneratorEdit from './edit/gradient-generator-edit';

const GradientGenerator: React.FC = () => {
  return (
    <GradientGeneratorProvider>
      {/* Editor */}
      <GradientGeneratorEdit />
    </GradientGeneratorProvider>
  );
};

export default GradientGenerator;
