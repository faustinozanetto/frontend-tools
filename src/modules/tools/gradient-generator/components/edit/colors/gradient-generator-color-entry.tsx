import type { GradientColor } from '@modules/tools/gradient-generator/types/gradient-generator.types';
import clsx from 'clsx';
import React, { useCallback, useRef, useState } from 'react';
import { HslStringColorPicker } from 'react-colorful';
import useOnClickOutside from 'src/hooks/use-click-outside';

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
      className="m-1 h-14 w-14 cursor-pointer rounded-lg border-[3px] border-violet-600 p-2 "
      style={{ backgroundColor: color.color }}
    >
      <div className="relative h-full" onClick={() => setIsOpen(true)}>
        {open && (
          <div
            ref={popoverRef}
            className={clsx('absolute right-0 z-[100] rounded-md', index < 3 ? 'left-0' : 'right-0')}
            style={{ top: 'calc(100% + 5px)' }}
          >
            <HslStringColorPicker color={color.color} onChange={onColorChange} />
          </div>
        )}
      </div>
    </div>
  );
};

export default GradientGeneratorColorEntry;
