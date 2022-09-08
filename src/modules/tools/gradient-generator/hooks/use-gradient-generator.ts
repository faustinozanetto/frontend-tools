import { useMemo } from 'react';
import { GradientData, GradientType } from '../types/gradient-generator.types';

const useGradientGenerator = (gradient: GradientData) => {
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
      case GradientType.CONIC:
        type = 'conic-gradient';
    }

    // Parse all the colors.
    const parsedColors = gradient.colors.map((color, index) => {
      return ` ${color.color} ${color.position}%`;
    });

    return `${type}(${firstParam}, ${parsedColors})`;
  };

  const gradientStyle = useMemo(() => {
    const styles = generateGradientCode();
    return styles;
  }, [gradient]);

  return { gradientStyle };
};

export default useGradientGenerator;
