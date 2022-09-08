import { useMemo } from 'react';

import type { ShadowData } from '../types/shadow-generator.types';

const useShadowResults = (shadows: ShadowData[]) => {
  const generateShadowStyles = (): string => {
    // Shadow CSS Format.
    // <inset> <offset-x> <offset-y> <blur-radius> <blur-spread> <color>
    const genereatedShadows: string[] = shadows.map((shadow, index) => {
      const inset: string = shadow.inset ? 'inset' : '';
      const xOffset: string = shadow.horizontalOffset ? `${shadow.horizontalOffset}px` : '';
      const yOffset: string = shadow.verticalOffset ? `${shadow.verticalOffset}px` : '';
      const blurRadius: string = shadow.blurRadius ? `${shadow.blurRadius}px` : '';
      const spreadRadius: string = shadow.spreadRadius ? `${shadow.spreadRadius}px` : '';
      const color: string = shadow.color ? shadow.color : '';
      const separator: string = index >= 0 && index < shadows.length - 1 ? ',' : '';
      return `${inset} ${xOffset} ${yOffset} ${blurRadius} ${spreadRadius} ${color} ${separator}`;
    });
    return genereatedShadows.join('').trim();
  };

  const shadowStyle = useMemo(() => {
    const styles = generateShadowStyles();
    return styles;
  }, [shadows]);

  return { shadowStyle };
};

export default useShadowResults;
