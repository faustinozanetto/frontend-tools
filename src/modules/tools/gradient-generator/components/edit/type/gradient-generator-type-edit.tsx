import useGradientGeneratorContext from '@modules/tools/gradient-generator/hooks/use-gradient-generator-context';
import Button from '@modules/ui/components/button/button';
import React, { useEffect, useState } from 'react';
import { GradientType } from '@modules/tools/gradient-generator/types/gradient-generator.types';

const GradientGeneratorTypeEdit: React.FC = () => {
  const { gradient, setType } = useGradientGeneratorContext();
  const [selected, setSelected] = useState<GradientType>(gradient.type);

  useEffect(() => {
    setType(selected);
  }, [selected]);

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row  items-center mb-2 justify-between">
        <h3 className="text-lg font-semibold text-gray-800">Type</h3>
        <div className="items-center space-x-2">
          {Object.values(GradientType).map((type, index) => {
            return (
              <Button key={index} size="sm" onClick={() => setSelected(type)}>
                {type}
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GradientGeneratorTypeEdit;
