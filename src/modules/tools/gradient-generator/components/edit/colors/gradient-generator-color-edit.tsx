import useGradientGeneratorContext from '@modules/tools/gradient-generator/hooks/use-gradient-generator-context';
import Button from '@modules/ui/components/button/button';
import React from 'react';

import GradientGeneratorColorEntry from './gradient-generator-color-entry';

const GradientGeneratorColorEdit: React.FC = () => {
  const { gradient, addColor, updateColor } = useGradientGeneratorContext();

  const handleColorAdd = () => {
    addColor({ color: '#0000B9', position: 10 });
  };

  return (
    <div className="flex w-full flex-col">
      <div className="mb-2 flex flex-row items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-800">Colors</h3>
        <Button size="sm" onClick={() => handleColorAdd()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </Button>
      </div>
      <div className="flex flex-row items-center justify-center">
        {gradient.colors.map((color, index) => {
          return (
            <GradientGeneratorColorEntry
              key={index}
              index={index}
              color={color}
              onColorChange={(newColor) => {
                updateColor(index, { ...color, color: newColor });
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default GradientGeneratorColorEdit;
