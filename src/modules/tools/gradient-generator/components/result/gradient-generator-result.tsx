import CodeSnippetResult from '@modules/ui/components/code/code-snippet-result';
import React, { useMemo } from 'react';

import useGradientGenerator from '../../hooks/use-gradient-generator';
import useGradientGeneratorContext from '../../hooks/use-gradient-generator-context';
import GradientGeneratorShowcase from './showcase/gradient-generator-showcase';

const GradientGeneratorResult: React.FC = () => {
  const { gradient } = useGradientGeneratorContext();
  const { gradientStyle } = useGradientGenerator(gradient, true);

  const codeResult = useMemo(() => {
    return `background: ${gradientStyle}`;
  }, [gradientStyle]);

  return (
    <>
      <GradientGeneratorShowcase gradientStyle={gradientStyle} />
      <CodeSnippetResult code={codeResult} />
    </>
  );
};

export default GradientGeneratorResult;
