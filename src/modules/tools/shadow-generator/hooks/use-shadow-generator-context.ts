import { useContext } from 'react';
import { IShadowGeneratorContextProps, ShadowGeneratorContext } from '../context/shadow-generator-context';

const useShadowGeneratorContext = () => {
  return useContext<IShadowGeneratorContextProps>(ShadowGeneratorContext);
};

export default useShadowGeneratorContext;
