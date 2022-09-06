import React from 'react';
import useShadowGeneratorContext from '../hooks/use-shadow-generator-context';
import ShadowGeneratorEdit from './shadow-generator-edit';

const ShadowGeneratorShadows: React.FC = () => {
  const { shadows } = useShadowGeneratorContext();

  return (
    <div>
      {shadows.map((shadow) => (
        <ShadowGeneratorEdit shadow={shadow} />
      ))}
    </div>
  );
};

export default ShadowGeneratorShadows;
