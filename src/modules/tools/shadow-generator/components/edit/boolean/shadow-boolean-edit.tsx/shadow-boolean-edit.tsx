import type { ChangeEvent } from 'react';
import React, { useEffect, useState } from 'react';
import useDebounce from 'src/hooks/use-debounce';

interface IShadowBooleanEditProps {
  /** Label to display */
  label: string;
  /** Default value of the checkbox */
  defaultValue: boolean;
  /** Callback to when the state changes */
  onChange: (value: boolean) => void;
}

const ShadowBooleanEdit: React.FC<IShadowBooleanEditProps> = (props) => {
  const { label, defaultValue, onChange } = props;
  const [value, setValue] = useState<boolean>(defaultValue);
  const debouncedValue = useDebounce<boolean>(value, 5);

  const handleSliderChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(Boolean(event.target.checked));
  };

  useEffect(() => {
    onChange(debouncedValue);
  }, [debouncedValue]);

  return (
    <div className="flex flex-row items-center justify-between space-x-2">
      <label htmlFor={label} className="font-semibold text-gray-800">
        {label}
      </label>
      <input
        id={label}
        type="checkbox"
        defaultChecked={defaultValue}
        onChange={handleSliderChange}
        className="h-4 w-4 rounded-lg border-gray-300 bg-gray-100 text-purple-600"
      />
    </div>
  );
};

export default ShadowBooleanEdit;
