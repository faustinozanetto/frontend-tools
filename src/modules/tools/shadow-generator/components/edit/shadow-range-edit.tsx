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
  const debouncedValue = useDebounce<number>(value, 100);

  const handleSliderChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value));
  };

  useEffect(() => {
    onChange(debouncedValue);
  }, [debouncedValue]);

  return (
    <React.Fragment>
      <label htmlFor={label} className="block mb-2 text-sm font-medium text-gray-900">
        {label}
      </label>
      <input
        id={label}
        type="range"
        defaultValue={defaultValue}
        onChange={handleSliderChange}
        value={value}
        min={min}
        max={max}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
      />
    </React.Fragment>
  );
};

export default ShadowRangeEdit;
