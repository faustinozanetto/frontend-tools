import React, { createContext, useMemo, useState } from 'react';

import type { ShadowData } from '../types/shadow-generator.types';
import { defaultShadow } from '../types/shadow-generator.types';

export interface IShadowGeneratorContextProps {
  /** Shadows array */
  shadows: ShadowData[];
  /** Add shadow */
  addShadow: (shadow: ShadowData) => void;
  /** Update shadow */
  updateShadow: (shadow: ShadowData) => void;
  /** Remove shadow */
  removeShadow: (shadowId: ShadowData['id']) => void;
}

const initialState: IShadowGeneratorContextProps = {
  shadows: [defaultShadow],
  addShadow: (_shadow: ShadowData) => {},
  updateShadow: (_shadow: ShadowData) => {},
  removeShadow: (_shadowId: ShadowData['id']) => {},
};

export const ShadowGeneratorContext = createContext<IShadowGeneratorContextProps>(initialState);

interface IShadowGeneratorProviderProps {
  children: React.ReactNode;
}

const ShadowGeneratorProvider: React.FC<IShadowGeneratorProviderProps> = ({ children }) => {
  const [internalShadows, setInternalShadows] = useState<ShadowData[]>(initialState.shadows);

  /**
   * Adds a shadow to the array.
   * @param shadow Shadow to add
   */
  const addShadow = (shadow: ShadowData) => {
    if (!internalShadows.includes(shadow)) {
      setInternalShadows((prevShadows) => [...prevShadows, shadow]);
    }
  };

  /**
   * Updates a shadow
   * @param shadow Shadow to update
   */
  const updateShadow = (shadow: ShadowData) => {
    const updatedShadows = internalShadows.map((mShadow) => (mShadow.id === shadow.id ? shadow : mShadow));
    setInternalShadows(updatedShadows);
  };

  /**
   * Removes a shadow by id
   * @param shadowId Shadow id to remove
   */
  const removeShadow = (shadowId: ShadowData['id']) => {
    setInternalShadows((prevShadows) => {
      return prevShadows.filter((shadow) => shadow.id !== shadowId);
    });
  };

  const value = useMemo(() => ({ shadows: internalShadows, addShadow, updateShadow, removeShadow }), [internalShadows]);

  return <ShadowGeneratorContext.Provider value={value}>{children}</ShadowGeneratorContext.Provider>;
};

export default ShadowGeneratorProvider;
