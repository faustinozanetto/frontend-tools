import Button from '@modules/ui/components/button/button';
import React, { useCallback, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

import type { IShadowGeneratorContextProps } from '../../context/shadow-generator-context';
import { ShadowGeneratorContext } from '../../context/shadow-generator-context';
import { defaultShadow } from '../../types/shadow-generator.types';

const ShadowGeneratorAdd: React.FC = () => {
  const { addShadow } = useContext<IShadowGeneratorContextProps>(ShadowGeneratorContext);

  const handleShadowAdd = useCallback(() => {
    addShadow({ ...defaultShadow, id: uuidv4() });
  }, []);

  return (
    <Button aria-label="shadow-add" size="sm" onClick={handleShadowAdd}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
      </svg>
    </Button>
  );
};

export default ShadowGeneratorAdd;
