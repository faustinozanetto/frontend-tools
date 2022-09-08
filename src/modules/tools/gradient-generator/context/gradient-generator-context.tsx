import React, { useMemo } from 'react';
import { createContext, useState } from 'react';
import { GradientColor, GradientData, GradientType } from '../types/gradient-generator.types';

export interface IGradientGeneratorContextProps {
  /** Gradient Data */
  gradient: GradientData;
  /** Set gradient type. */
  setType: (type: GradientData['type']) => void;
  /**
   * Add color to gradient
   */
  addColor: (color: GradientData['colors'][0]) => void;
  /**
   * Update color of the gradient
   */
  updateColor: (index: number, color: GradientData['colors'][0]) => void;
  /**
   * Remove a color from the gradient
   */
  removeColor: (index: number) => void;
}

const initialState: IGradientGeneratorContextProps = {
  gradient: {
    colors: [],
    maxColors: 5,
    radialRotation: 90,
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

  /**
   * Sets the type of the gradient to generate.
   * @param type Gradient Type.
   */
  const setType = (type: GradientData['type']) => {
    setInternalGradient((prev) => ({ ...prev, type }));
  };

  /**
   * Adds a new color to the gradient if we have not reached max capacity.
   * @param color Color to add.
   */
  const addColor = (color: GradientData['colors'][0]) => {
    if (!(internalGradient.colors.length >= internalGradient.maxColors)) {
      setInternalGradient((prev) => ({ ...prev, colors: [...prev.colors, color] }));
    }
  };

  /**
   * Updates a color at a given index if valid.
   * @param index Index of the color to update. 0 to colors.lenght -1
   * @param color Color to feed to the updated.
   */
  const updateColor = (index: number, color: GradientColor) => {
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

  /**
   *  Removes a color at a given index. 0 to colors.lenght -1
   * @param index Index of the color to remove.
   */
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
