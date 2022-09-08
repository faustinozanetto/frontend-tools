import useGradientGeneratorContext from '@modules/tools/gradient-generator/hooks/use-gradient-generator-context';
import Button from '@modules/ui/components/button/button';
import { Listbox, Transition } from '@headlessui/react';
import React, { Fragment, useEffect, useState } from 'react';
import { GradientType } from '@modules/tools/gradient-generator/types/gradient-generator.types';

const GradientGeneratorRotationEdit: React.FC = () => {
  const { gradient, setRadialRotation } = useGradientGeneratorContext();
  const [rotation, setRotation] = useState<number>(gradient.radialRotation);

  const handleRotationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRotation(Number(event.target.value));
  };

  useEffect(() => {
    setRadialRotation(rotation);
  }, [rotation]);

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row justify-between">
        <label htmlFor="gradient-rotation" className="font-semibold text-gray-800">
          Rotation
        </label>
        <span className="text-sm">{rotation}deg</span>
      </div>
      <input
        id="gradient-rotation"
        type="range"
        onChange={handleRotationChange}
        value={rotation}
        min={0}
        max={360}
        className="w-full bg-gray-200 rounded-lg appearance-none cursor-pointer"
      />
    </div>
  );
};

export default GradientGeneratorRotationEdit;
