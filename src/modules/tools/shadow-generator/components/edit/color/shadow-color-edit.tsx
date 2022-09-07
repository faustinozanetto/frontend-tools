import React, { useEffect, useState } from 'react';
import { HslaStringColorPicker } from 'react-colorful';
import useDebounce from 'src/hooks/use-debounce';

interface IShadowColorEditProps {
  defaultValue: string;
  onChange: (value: string) => void;
}

const ShadowColorEdit: React.FC<IShadowColorEditProps> = (props) => {
  const { defaultValue, onChange } = props;
  const [color, setColor] = useState<string>(defaultValue);
  const debouncedColor = useDebounce<string>(color, 20);

  const handleShadowColorUpdate = (newColor: string) => {
    setColor(newColor);
  };

  useEffect(() => {
    onChange(debouncedColor);
  }, [debouncedColor]);

  return (
    <div className="flex flex-col justify-center">
      <span className="text-lg font-semibold text-gray-800">Color</span>
      <div className="color-picker">
        <HslaStringColorPicker color={color} onChange={handleShadowColorUpdate} />
      </div>
    </div>
  );
};

export default ShadowColorEdit;
