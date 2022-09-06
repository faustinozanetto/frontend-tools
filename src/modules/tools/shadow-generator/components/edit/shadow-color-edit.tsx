import React, { ChangeEvent, useEffect, useState } from 'react';
import { HexAlphaColorPicker } from 'react-colorful';
import useDebounce from 'src/hooks/use-debounce';
import useShadowGeneratorContext from '../../hooks/use-shadow-generator-context';
import { ShadowData } from '../../types/shadow-generator.types';

interface IShadowColorEditProps {
  shadow: ShadowData;
}

const ShadowColorEdit: React.FC<IShadowColorEditProps> = (props) => {
  const { shadow } = props;
  const [color, setColor] = useState<string>(shadow.color);
  const { updateShadow } = useShadowGeneratorContext();
  const debouncedColor = useDebounce<string>(color, 100);

  const handleShadowColorUpdate = (newColor: string) => {
    setColor(newColor);
  };

  useEffect(() => {
    updateShadow({ ...shadow, color: debouncedColor });
  }, [debouncedColor]);

  return (
    <div className="flex flex-col justify-center">
      <span className="text-xl font-semibold text-gray-800">Color</span>
      <HexAlphaColorPicker color={color} onChange={handleShadowColorUpdate} />
    </div>
  );
};

export default ShadowColorEdit;
