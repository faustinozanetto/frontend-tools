import React from 'react';
import useShadowGeneratorContext from '../hooks/use-shadow-generator-context';
import ShadowGeneratorEdit from './edit/shadow-generator-edit';

const ShadowGeneratorShadows: React.FC = () => {
  const { shadows } = useShadowGeneratorContext();

  return (
    <div className="flex flex-col space-y-2">
      {shadows && shadows.map((shadow) => <ShadowGeneratorEdit key={shadow.id} shadowId={shadow.id!} />)}
    </div>
  );
};

export default ShadowGeneratorShadows;
