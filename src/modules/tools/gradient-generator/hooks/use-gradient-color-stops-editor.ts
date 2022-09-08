import { useState } from 'react';

import useGradientGeneratorContext from './use-gradient-generator-context';

const useGradientColorStopsEditor = () => {
  const { gradient, updateColor } = useGradientGeneratorContext();
  const [currentColorIndex, setCurrentColorIndex] = useState<number>(0);

  /**
   *
   * @param idx Index to check
   * @returns True or false if the index is in range or not.
   */
  const indexInRange = (idx: number): boolean => {
    return idx >= 0 && idx < gradient.colors.length;
  };

  /**
   * Selected a color stop by a given index.
   * @param index Index of the color stop to select.
   */
  const updateSelectedColorStopIndex = (index: number): void => {
    if (indexInRange(index)) {
      setCurrentColorIndex(index);
    }
  };

  /**
   * Updates a gradient color based on the current stop index.
   * @param color Color to feed
   * @param position Position of the color stop.
   */
  const updateSelectedColorStop = (color: string, position: number): void => {
    if (indexInRange(currentColorIndex)) {
      updateColor(currentColorIndex, { color, position: Number(position.toFixed(2)) });
    }
  };

  return { updateSelectedColorStopIndex, updateSelectedColorStop };
};

export default useGradientColorStopsEditor;
