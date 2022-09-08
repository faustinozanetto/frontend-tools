import React from 'react';

import GradientGeneratorColorEdit from './colors/gradient-generator-color-edit';
import GradientGeneratorColorStopsEdit from './colors/stops/gradient-generator-color-stops-edit';
import GradientGeneratorRotationEdit from './rotation/gradient-generator-rotation-edit';
import GradientGeneratorTypeEdit from './type/gradient-generator-type-edit';

const GradientGeneratorEdit: React.FC = () => {
  return (
    <div className="flex flex-col space-y-2 rounded-lg bg-gray-100 p-4 sm:space-y-4">
      <div className="flex flex-row items-center justify-between">
        <h3 className="text-2xl font-bold text-gray-900">Editor</h3>
      </div>
      <div className="flex flex-col sm:flex-row sm:space-x-4">
        <div className="mb-2 flex w-full flex-col sm:mb-0 sm:w-1/2">
          <GradientGeneratorTypeEdit />
          <GradientGeneratorRotationEdit />
        </div>
        {/* Colors */}
        <div className="flex w-full flex-col sm:w-1/2">
          <GradientGeneratorColorEdit />
          <GradientGeneratorColorStopsEdit />
        </div>
      </div>
    </div>
  );
};

export default GradientGeneratorEdit;
