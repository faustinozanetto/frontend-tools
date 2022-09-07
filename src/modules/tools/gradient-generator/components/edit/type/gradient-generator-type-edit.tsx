import useGradientGeneratorContext from '@modules/tools/gradient-generator/hooks/use-gradient-generator-context';
import Button from '@modules/ui/components/button/button';
import { Listbox, Transition } from '@headlessui/react';
import React, { Fragment, useEffect, useState } from 'react';
import { GradientType } from '@modules/tools/gradient-generator/types/gradient-generator.types';

const GradientGeneratorTypeEdit: React.FC = () => {
  const [selected, setSelected] = useState<GradientType>(GradientType.RADIAL);
  const { gradient, setType } = useGradientGeneratorContext();

  useEffect(() => {
    setType(selected);
  }, [selected]);

  return (
    <div className="flex flex-row w-full items-center mb-2 justify-between">
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
  );
};

export default GradientGeneratorTypeEdit;
