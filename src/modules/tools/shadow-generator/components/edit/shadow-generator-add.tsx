import Button from '@modules/ui/components/button/button';
import React, { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { defaultShadow } from '../../types/shadow-generator.types';
import { IShadowGeneratorContextProps, ShadowGeneratorContext } from '../../context/shadow-generator-context';

const ShadowGeneratorAdd: React.FC = () => {
  const { addShadow } = useContext<IShadowGeneratorContextProps>(ShadowGeneratorContext);

  const handleShadowAdd = () => {
    addShadow({ ...defaultShadow, id: uuidv4() });
  };

  return (
    <Button size="sm" onClick={() => handleShadowAdd()}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
      </svg>
    </Button>
  );
};

export default ShadowGeneratorAdd;
