import React, { useMemo } from 'react';
import { createContext, useState } from 'react';
import { GradientData, GradientType } from '../types/gradient-generator.types';

export interface IGradientGeneratorContextProps {
  gradient: GradientData;
  setType: (type: GradientData['type']) => void;
  addColor: (color: GradientData['colors'][0]) => void;
  updateColor: (index: number, color: GradientData['colors'][0]) => void;
  removeColor: (index: number) => void;
}

const initialState: IGradientGeneratorContextProps = {
  gradient: {
    colors: [],
    maxColors: 5,
    radialRotation: 0,
    type: GradientType.LINEAR,
  },
  setType: (_type) => {},
  addColor: (_color) => {},
  updateColor: (_index, _color) => {},
  removeColor: (_index) => {},
};

export const GradientGeneratorContext = createContext<IGradientGeneratorContextProps>(initialState);

interface IGradientGeneratorProviderProps {
  children: React.ReactNode;
}

const GradientGeneratorProvider: React.FC<IGradientGeneratorProviderProps> = ({ children }) => {
  const [internalGradient, setInternalGradient] = useState<GradientData>(initialState.gradient);

  const setType = (type: GradientData['type']) => {
    setInternalGradient((prev) => ({ ...prev, type }));
  };

  const addColor = (color: GradientData['colors'][0]) => {
    if (internalGradient.colors.length >= internalGradient.maxColors) return;
    setInternalGradient((prev) => ({ ...prev, colors: [...prev.colors, color] }));
  };

  const updateColor = (index: number, color: GradientData['colors'][0]) => {
    if (index >= 0 && index < internalGradient.colors.length) {
      setInternalGradient((prev) => {
        const updatedColors = prev.colors.map((c, i) => {
          if (i === index) {
            return color;
          }
          return c;
        });
        return { ...prev, colors: updatedColors };
      });
    }
  };

  const removeColor = (index: number) => {
    if (index >= 0 && index < internalGradient.colors.length) {
      setInternalGradient((prev) => {
        const updatedColors = prev.colors.filter((_, i) => i !== index);
        return { ...prev, colors: updatedColors };
      });
    }
  };

  const value = useMemo(
    () => ({ gradient: internalGradient, setType, addColor, updateColor, removeColor }),
    [internalGradient]
  );

  return <GradientGeneratorContext.Provider value={value}>{children}</GradientGeneratorContext.Provider>;
};

export default GradientGeneratorProvider;
