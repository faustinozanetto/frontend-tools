import useGradientGeneratorContext from '@modules/tools/gradient-generator/hooks/use-gradient-generator-context';
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
        className="w-full cursor-pointer appearance-none rounded-lg bg-gray-200"
      />
    </div>
  );
};

export default GradientGeneratorRotationEdit;
