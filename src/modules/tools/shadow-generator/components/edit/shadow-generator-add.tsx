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
    <Button size="md" onClick={() => handleShadowAdd()}>
      Add
    </Button>
  );
};

export default ShadowGeneratorAdd;
