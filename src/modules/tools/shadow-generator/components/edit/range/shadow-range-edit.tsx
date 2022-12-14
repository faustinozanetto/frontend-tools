import type { ChangeEvent } from 'react';
import React, { useEffect, useState } from 'react';
import useDebounce from 'src/hooks/use-debounce';

interface IShadowRangeEditProps {
  /** Label to display */
  label: string;
  /** Default value of the slider */
  defaultValue: number;
  /** Min value */
  min: number;
  /** Max value */
  max: number;
  /** Callback when the state changes */
  onChange: (value: number) => void;
}

const ShadowRangeEdit: React.FC<IShadowRangeEditProps> = (props) => {
  const { label, defaultValue, min, max, onChange } = props;
  const [value, setValue] = useState<number>(defaultValue);
  const debouncedValue = useDebounce<number>(value, 5);

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
        className="w-full cursor-pointer appearance-none rounded-lg bg-gray-200"
      />
    </React.Fragment>
  );
};

export default ShadowRangeEdit;
