import useGradientGeneratorContext from '@modules/tools/gradient-generator/hooks/use-gradient-generator-context';
import { GradientType } from '@modules/tools/gradient-generator/types/gradient-generator.types';
import Button from '@modules/ui/components/button/button';
import React, { useEffect, useState } from 'react';

const GradientGeneratorTypeEdit: React.FC = () => {
  const { gradient, setType } = useGradientGeneratorContext();
  const [selected, setSelected] = useState<GradientType>(gradient.type);

  useEffect(() => {
    setType(selected);
  }, [selected]);

  return (
    <div className="flex w-full flex-col">
      <div className="mb-2 flex  flex-row items-center justify-between">
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
