import Button from '@modules/ui/components/button/button';
import { v4 as uuidv4 } from 'uuid';
import React, { useContext } from 'react';
import { defaultShadow, ShadowData } from '../types/shadow-generator.types';
import { IShadowGeneratorContextProps, ShadowGeneratorContext } from '../context/shadow-generator-context';

const ShadowGeneratorAdd: React.FC = () => {
  const { addShadow } = useContext<IShadowGeneratorContextProps>(ShadowGeneratorContext);

  const handleShadowAdd = () => {
    const shadow: ShadowData = {
      id: uuidv4(),
      ...defaultShadow,
    };
    addShadow(shadow);
  };

  return (
    <div className="flex flex-row justify-between items-center">
      <h3 className="font-bold text-gray-900 text-lg">Add Shadow</h3>

      <Button size="sm" onClick={() => handleShadowAdd()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
        </svg>
      </Button>
    </div>
  );
};

export default ShadowGeneratorAdd;
