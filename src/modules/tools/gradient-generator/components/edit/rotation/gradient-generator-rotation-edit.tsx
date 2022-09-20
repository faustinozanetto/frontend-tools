import useGradientGeneratorContext from '@modules/tools/gradient-generator/hooks/use-gradient-generator-context';
import {
  MAX_GRADIENT_ROTATION,
  MIN_GRADIENT_ROTATION,
} from '@modules/tools/gradient-generator/utils/gradient-generator-constants';
import React, { useEffect, useState } from 'react';

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
    <div className="flex w-full flex-col">
      <div className="flex flex-row justify-between">
        <label htmlFor="gradient-rotation" className="text-lg font-semibold text-gray-800">
          Rotation
        </label>
        <span className="text-sm">{rotation}deg</span>
      </div>
      <input
        id="gradient-rotation"
        type="range"
        onChange={handleRotationChange}
        value={rotation}
        min={MIN_GRADIENT_ROTATION}
        max={MAX_GRADIENT_ROTATION}
        className="w-full cursor-pointer appearance-none rounded-lg bg-gray-200"
      />
    </div>
  );
};

export default GradientGeneratorRotationEdit;
