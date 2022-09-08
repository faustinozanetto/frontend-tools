import { useEffect, useState } from 'react';

import type { GradientData } from '../types/gradient-generator.types';
import { GradientType } from '../types/gradient-generator.types';

/**
 * Gradient Generator Hook
 * @param gradient Gradient data to feed the generator.
 * @param withRotation Wether to use or not custom rotation.
 * @returns The generated css styles.
 */
const useGradientGenerator = (gradient: GradientData, withRotation: boolean) => {
  const [gradientStyle, setGradientStyle] = useState<string>('');

  /**
   * Generates the gradient css code using the gradient data prop.
   * @param withRotation Wether to include a custom rotation or not.
   * @returns The CSS generated gradient styles.
   */
  const generateGradientCode = (): string => {
    let type: string = '';
    let firstParam: string = '';
    switch (gradient.type) {
      case GradientType.LINEAR: {
        type = 'linear-gradient';
        firstParam = `${gradient.radialRotation}deg`;
        break;
      }
      case GradientType.RADIAL: {
        type = 'radial-gradient';
        firstParam = 'circle';
        break;
      }
      case GradientType.CONIC: {
        type = 'conic-gradient';
        break;
      }
      default: {
        type = 'linear-gradient';
        firstParam = `${gradient.radialRotation}deg`;
        break;
      }
    }

    // Parse all the colors.
    const parsedColors = gradient.colors.map((color) => {
      return ` ${color.color} ${color.position}%`;
    });

    return `${type}(${withRotation ? `${firstParam},` : '90deg,'} ${parsedColors})`;
  };

  useEffect(() => {
    setGradientStyle(generateGradientCode());
  }, [gradient]);

  return { gradientStyle };
};

export default useGradientGenerator;
