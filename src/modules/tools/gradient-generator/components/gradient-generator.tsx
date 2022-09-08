import React from 'react';
import GradientGeneratorProvider from '../context/gradient-generator-context';
import GradientGeneratorEdit from './edit/gradient-generator-edit';
import GradientGeneratorResult from './result/gradient-generator-result';

const GradientGenerator: React.FC = () => {
  return (
    <GradientGeneratorProvider>
      {/* Editor */}
      <GradientGeneratorEdit />
      {/* Result */}
      <GradientGeneratorResult />
    </GradientGeneratorProvider>
  );
};

export default GradientGenerator;
