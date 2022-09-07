import React from 'react';
import useShadowGeneratorContext from '../../hooks/use-shadow-generator-context';
import useShadowResults from '../../hooks/use-shadow-results';
import ShadowGeneratorCode from './code/shadow-generator-code';
import ShadowGeneratorShowcase from './showcase/shadow-generator-showcase';

const ShadowGeneratorResult: React.FC = () => {
  const { shadows } = useShadowGeneratorContext();
  const { shadowStyle } = useShadowResults(shadows);

  return (
    <>
      <ShadowGeneratorShowcase shadowStyle={shadowStyle} />
      <ShadowGeneratorCode shadowStyle={shadowStyle} />
    </>
  );
};

export default ShadowGeneratorResult;
