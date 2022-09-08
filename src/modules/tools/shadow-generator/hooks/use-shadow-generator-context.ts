import { useContext } from 'react';

import type { IShadowGeneratorContextProps } from '../context/shadow-generator-context';
import { ShadowGeneratorContext } from '../context/shadow-generator-context';

const useShadowGeneratorContext = () => {
  return useContext<IShadowGeneratorContextProps>(ShadowGeneratorContext);
};

export default useShadowGeneratorContext;
