import React, { useCallback, useEffect, useRef, useState } from 'react';
import { GradientColor } from '@modules/tools/gradient-generator/types/gradient-generator.types';
import { HslStringColorPicker } from 'react-colorful';
import useOnClickOutside from 'src/hooks/use-click-outside';
import useDebounce from 'src/hooks/use-debounce';
import useGradientGeneratorContext from '@modules/tools/gradient-generator/hooks/use-gradient-generator-context';

interface IGradieentGeneratorColorEntryProps {
  color: GradientColor;
  index: number;
}

const GradientGeneratorColorEntry: React.FC<IGradieentGeneratorColorEntryProps> = (props) => {
  const { color: defaultColor, index } = props;
  const { updateColor } = useGradientGeneratorContext();
  const popoverRef = useRef<HTMLDivElement>(null);
  const [open, setIsOpen] = useState<boolean>(false);
  const [color, setColor] = useState<GradientColor>(defaultColor);
  const debouncedColor = useDebounce<GradientColor>(color, 20);

  const close = useCallback(() => setIsOpen(false), []);

  const handleColorChange = (newColor: string): void => {
    setColor((prev) => ({ ...prev, color: newColor }));
  };

  useEffect(() => {
    updateColor(index, debouncedColor);
  }, [debouncedColor]);

  useOnClickOutside(popoverRef, close);

  return (
    <div
      className="m-1 p-2 w-14 h-14 rounded-lg border-violet-600 cursor-pointer border-[3px]"
      style={{ backgroundColor: debouncedColor.color }}
    >
      <div className="h-full relative" onClick={() => setIsOpen(true)}>
        {open && (
          <div ref={popoverRef} className="absolute rounded-md left-0" style={{ top: 'calc(100% + 2px)' }}>
            <HslStringColorPicker color={color.color} onChange={handleColorChange} />
          </div>
        )}
      </div>
    </div>
  );
};

export default GradientGeneratorColorEntry;
