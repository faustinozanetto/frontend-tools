import CodeSnippetResult from '@modules/ui/components/code/code-snippet-result';
import React, { useMemo } from 'react';

import useShadowGeneratorContext from '../../hooks/use-shadow-generator-context';
import useShadowResults from '../../hooks/use-shadow-results';
import ShadowGeneratorShowcase from './showcase/shadow-generator-showcase';

const ShadowGeneratorResult: React.FC = () => {
  const { shadows } = useShadowGeneratorContext();
  const { shadowStyle } = useShadowResults(shadows);

  const codeResult = useMemo(() => {
    return `box-shadow: ${shadowStyle}`;
  }, [shadowStyle]);

  return (
    <>
      <ShadowGeneratorShowcase shadowStyle={shadowStyle} />
      <CodeSnippetResult code={codeResult} />
    </>
  );
};

export default ShadowGeneratorResult;
