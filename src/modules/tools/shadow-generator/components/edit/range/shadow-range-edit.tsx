import React, { ChangeEvent, useEffect, useState } from 'react';
import useDebounce from 'src/hooks/use-debounce';

interface IShadowRangeEditProps {
  label: string;
  defaultValue: number;
  min: number;
  max: number;
  onChange: (value: number) => void;
}

const ShadowRangeEdit: React.FC<IShadowRangeEditProps> = (props) => {
  const { label, defaultValue, min, max, onChange } = props;
  const [value, setValue] = useState<number>(defaultValue);
  const debouncedValue = useDebounce<number>(value, 20);

  const handleSliderChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value));
  };

  useEffect(() => {
    onChange(debouncedValue);
  }, [debouncedValue]);

  return (
    <React.Fragment>
      <div className="flex flex-row justify-between">
        <label htmlFor={label} className="font-semibold text-gray-800">
          {label}
        </label>
        <span className="text-sm">{value}px</span>
      </div>
      <input
        id={label}
        type="range"
        onChange={handleSliderChange}
        value={value}
        min={min}
        max={max}
        className="w-full bg-gray-200 rounded-lg appearance-none cursor-pointer"
      />
    </React.Fragment>
  );
};

export default ShadowRangeEdit;
