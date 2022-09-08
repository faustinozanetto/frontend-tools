import React from 'react';
import useGradientGenerator from '../../hooks/use-gradient-generator';
import useGradientGeneratorContext from '../../hooks/use-gradient-generator-context';
import GradientGeneratorResultCode from './code/gradient-generator-code';
import GradientGeneratorShowcase from './showcase/gradient-generator-showcase';

const GradientGeneratorResult: React.FC = () => {
  const { gradient } = useGradientGeneratorContext();
  const { gradientStyle } = useGradientGenerator(gradient, true);

  return (
    <>
      <GradientGeneratorShowcase gradientStyle={gradientStyle} />
      <GradientGeneratorResultCode gradientStyle={gradientStyle} />
    </>
  );
};

export default GradientGeneratorResult;
