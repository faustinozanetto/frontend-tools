import { useContext } from 'react';
import { GradientGeneratorContext, IGradientGeneratorContextProps } from '../context/gradient-generator-context';

const useGradientGeneratorContext = () => {
  return useContext<IGradientGeneratorContextProps>(GradientGeneratorContext);
};

export default useGradientGeneratorContext;
