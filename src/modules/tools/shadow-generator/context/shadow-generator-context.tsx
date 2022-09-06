import React, { useMemo } from 'react';
import { createContext, useState } from 'react';
import { ShadowData } from '../types/shadow-generator.types';

export interface IShadowGeneratorContextProps {
  shadows: ShadowData[];
  addShadow: (shadow: ShadowData) => void;
  removeShadow: (shadowId: string) => void;
}

const initialState: IShadowGeneratorContextProps = {
  shadows: [],
  addShadow: (_shadow: ShadowData) => {},
  removeShadow: (_shadowId: string) => {},
};

export const ShadowGeneratorContext = createContext<IShadowGeneratorContextProps>(initialState);

interface IShadowGeneratorProviderProps {
  children: React.ReactNode;
}

const ShadowGeneratorProvider: React.FC<IShadowGeneratorProviderProps> = ({ children }) => {
  const [internalShadows, setInternalShadows] = useState<ShadowData[]>([]);

  const addShadow = (shadow: ShadowData) => {
    if (!internalShadows.includes(shadow)) {
      setInternalShadows((prevShadows) => [...prevShadows, shadow]);
    }
  };

  const removeShadow = (shadowId: string) => {
    setInternalShadows((prevShadows) => {
      return prevShadows.filter((shadow) => shadow.id !== shadowId);
    });
  };

  const value = useMemo(() => ({ shadows: internalShadows, addShadow, removeShadow }), [internalShadows]);

  return <ShadowGeneratorContext.Provider value={value}>{children}</ShadowGeneratorContext.Provider>;
};

export default ShadowGeneratorProvider;
