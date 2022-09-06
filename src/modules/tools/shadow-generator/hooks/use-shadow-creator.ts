import { useState } from 'react';
import { ShadowData } from '../types/shadow-generator.types';

const useShadowCreator = () => {
  const [shadow, setShadow] = useState<ShadowData | null>(null);

  return { shadow };
};

export default useShadowCreator;
