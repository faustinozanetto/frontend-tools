import React from 'react';
import useGradientGeneratorContext from '../../hooks/use-gradient-generator-context';

const GradientGeneratorEdit: React.FC = () => {
  const { gradient } = useGradientGeneratorContext();

  return (
    <div className="flex flex-col bg-gray-100 p-4 rounded-lg space-y-2 sm:space-y-4">
      <div className="flex flex-row justify-between items-center">
        <h3 className="text-2xl font-bold text-gray-900">Editor</h3>
      </div>
    </div>
  );
};

export default GradientGeneratorEdit;
