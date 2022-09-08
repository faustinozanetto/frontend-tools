import React from 'react';
import useGradientGeneratorContext from '../../hooks/use-gradient-generator-context';
import GradientGeneratorColorEdit from './colors/gradient-generator-color-edit';
import GradientGeneratorColorStopsEdit from './colors/stops/gradient-generator-color-stops-edit';
import GradientGeneratorTypeEdit from './type/gradient-generator-type-edit';

const GradientGeneratorEdit: React.FC = () => {
  const { gradient } = useGradientGeneratorContext();

  return (
    <div className="flex flex-col bg-gray-100 p-4 rounded-lg space-y-2 sm:space-y-4">
      <div className="flex flex-row justify-between items-center">
        <h3 className="text-2xl font-bold text-gray-900">Editor</h3>
      </div>
      <div className="flex flex-col sm:flex-row sm:space-x-4">
        <div className="flex flex-col w-full sm:w-1/2">
          <GradientGeneratorTypeEdit />
        </div>
        {/* Colors */}
        <div className="flex flex-col w-full sm:w-1/2">
          <GradientGeneratorColorEdit />
          <GradientGeneratorColorStopsEdit />
        </div>
      </div>
    </div>
  );
};

export default GradientGeneratorEdit;
