import React, { useCallback, useRef, useState } from 'react';
import { GradientColor } from '@modules/tools/gradient-generator/types/gradient-generator.types';
import { HslStringColorPicker } from 'react-colorful';
import useOnClickOutside from 'src/hooks/use-click-outside';
import clsx from 'clsx';

interface IGradieentGeneratorColorEntryProps {
  index: number;
  color: GradientColor;
  onColorChange: (newColor: string) => void;
}

const GradientGeneratorColorEntry: React.FC<IGradieentGeneratorColorEntryProps> = (props) => {
  const { index, color, onColorChange } = props;
  const popoverRef = useRef<HTMLDivElement>(null);
  const [open, setIsOpen] = useState<boolean>(false);
  const close = useCallback(() => setIsOpen(false), []);

  useOnClickOutside(popoverRef, close);

  return (
    <div
      className="m-1 p-2 w-14 h-14 rounded-lg border-violet-600 cursor-pointer border-[3px] z-[100]"
      style={{ backgroundColor: color.color }}
    >
      <div className="h-full relative" onClick={() => setIsOpen(true)}>
        {open && (
          <div
            ref={popoverRef}
            className={clsx('absolute rounded-md right-0', index < 3 ? 'left-0' : 'right-0')}
            style={{ top: 'calc(100% + 2px)' }}
          >
            <HslStringColorPicker color={color.color} onChange={onColorChange} />
          </div>
        )}
      </div>
    </div>
  );
};

export default GradientGeneratorColorEntry;
