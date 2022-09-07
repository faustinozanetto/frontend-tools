import React, { useMemo } from 'react';
import { createContext, useState } from 'react';
import { GradientData } from '../types/gradient-generator.types';

export interface IGradientGeneratorContextProps {
  gradient: Partial<GradientData>;
  addColor: (color: GradientData['colors'][0]) => void;
  removeColor: (index: number) => void;
}

const initialState: IGradientGeneratorContextProps = {
  gradient: {},
  addColor: (_color) => {},
  removeColor: (_index) => {},
};

export const GradientGeneratorContext = createContext<IGradientGeneratorContextProps>(initialState);

interface IGradientGeneratorProviderProps {
  children: React.ReactNode;
}

const GradientGeneratorProvider: React.FC<IGradientGeneratorProviderProps> = ({ children }) => {
  const [internalGradient, setInternalGradient] = useState<Partial<GradientData>>(initialState.gradient);

  const addColor = (color: GradientData['colors'][0]) => {};

  const removeColor = (index: number) => {};

  const value = useMemo(() => ({ gradient: internalGradient, addColor, removeColor }), [internalGradient]);

  return <GradientGeneratorContext.Provider value={value}>{children}</GradientGeneratorContext.Provider>;
};

export default GradientGeneratorProvider;
