import React, { useMemo } from 'react';
import { createContext, useState } from 'react';
import { GradientData } from '../types/gradient-generator.types';

export interface IGradientGeneratorContextProps {
  gradient: GradientData;
}

const initialState: IGradientGeneratorContextProps = {
  gradient: {},
};

export const GradientGeneratorContext = createContext<IGradientGeneratorContextProps>(initialState);

interface IGradientGeneratorProviderProps {
  children: React.ReactNode;
}

const GradientGeneratorProvider: React.FC<IGradientGeneratorProviderProps> = ({ children }) => {
  const [internalGradient, setInternalGradient] = useState<GradientData>(initialState.gradient);

  const value = useMemo(() => ({ gradient: internalGradient }), [internalGradient]);

  return <GradientGeneratorContext.Provider value={value}>{children}</GradientGeneratorContext.Provider>;
};

export default GradientGeneratorProvider;
