import React, { ChangeEvent, useEffect, useState } from 'react';
import useDebounce from 'src/hooks/use-debounce';

interface IShadowBooleanEditProps {
  label: string;
  defaultValue: boolean;
  onChange: (value: boolean) => void;
}

const ShadowBooleanEdit: React.FC<IShadowBooleanEditProps> = (props) => {
  const { label, defaultValue, onChange } = props;
  const [value, setValue] = useState<boolean>(defaultValue);
  const debouncedValue = useDebounce<boolean>(value, 100);

  const handleSliderChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(Boolean(event.target.checked));
  };

  useEffect(() => {
    onChange(debouncedValue);
  }, [debouncedValue]);

  return (
    <div className="flex flex-row justify-between items-center">
      <label htmlFor={label} className="font-semibold text-gray-800">
        {label}
      </label>
      <input
        id={label}
        type="checkbox"
        defaultChecked={defaultValue}
        onChange={handleSliderChange}
        className="w-4 h-4 text-purple-600 bg-gray-100 rounded-lg border-gray-300"
      />
    </div>
  );
};

export default ShadowBooleanEdit;
