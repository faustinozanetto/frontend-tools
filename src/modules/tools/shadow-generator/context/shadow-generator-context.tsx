import React from 'react';
import { createContext, useState } from 'react';
import { ShadowData } from '../types/shadow-generator.types';

interface IShadowGeneratorContextProps {
  shadows: ShadowData[];
  addShadow: (shadow: ShadowData) => void;
  removeShadow: (shadowId: string) => void;
}

const initialState: IShadowGeneratorContextProps = {
  shadows: [],
  addShadow: () => {},
  removeShadow: () => {},
};

const ShadowGeneratorContext = createContext<IShadowGeneratorContextProps>(initialState);

interface IShadowGeneratorProviderProps {
  children: React.ReactNode;
}

const ShadowGeneratorProvider: React.FC<IShadowGeneratorProviderProps> = ({ children }) => {
  const [shadows, setShadows] = useState<ShadowData[]>([]);

  const addShadow = (shadow: ShadowData) => {
    if (shadows.find((shadow) => shadow.id === shadow.id)) return;
    setShadows((prevShadows) => [...prevShadows, shadow]);
  };

  const removeShadow = (shadowId: string) => {
    setShadows((prevShadows) => {
      return prevShadows.filter((shadow) => shadow.id === shadowId);
    });
  };

  return (
    <ShadowGeneratorContext.Provider value={{ shadows, addShadow, removeShadow }}>
      {children}
    </ShadowGeneratorContext.Provider>
  );
};

export default ShadowGeneratorProvider;
