import { useContext } from 'react';

import type { IGradientGeneratorContextProps } from '../context/gradient-generator-context';
import { GradientGeneratorContext } from '../context/gradient-generator-context';

const useGradientGeneratorContext = () => {
  return useContext<IGradientGeneratorContextProps>(GradientGeneratorContext);
};

export default useGradientGeneratorContext;
