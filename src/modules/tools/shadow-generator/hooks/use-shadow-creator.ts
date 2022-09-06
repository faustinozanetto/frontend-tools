import { useState } from 'react';
import { defaultShadow, ShadowData } from '../types/shadow-generator.types';
import {
  MAX_BLUR_RADIUS,
  MAX_H_OFFSET,
  MAX_SPREAD_RADIUS,
  MAX_V_OFFSET,
  MIN_BLUR_RADIUS,
  MIN_H_OFFSET,
  MIN_SPREAD_RADIUS,
  MIN_V_OFFSET,
} from '../utils/shadow-generator-constants';

const useShadowCreator = () => {
  const [shadow, setShadow] = useState<ShadowData>(defaultShadow);

  const setShadowVerticalOffset = (offset: number) => {
    if (offset < MIN_V_OFFSET || offset > MAX_V_OFFSET) return;

    setShadow((prev) => {
      const updatedShadow: ShadowData = { ...prev, verticalOffset: offset };
      return updatedShadow;
    });
  };

  const setShadowHorizontalOffset = (offset: number) => {
    if (offset < MIN_H_OFFSET || offset > MAX_H_OFFSET) return;

    setShadow((prev) => {
      const updatedShadow: ShadowData = { ...prev, horizontalOffset: offset };
      return updatedShadow;
    });
  };

  const setShadowBlurRadius = (radius: number) => {
    if (radius < MIN_BLUR_RADIUS || radius > MAX_BLUR_RADIUS) return;

    setShadow((prev) => {
      const updatedShadow: ShadowData = { ...prev, blurRadius: radius };
      return updatedShadow;
    });
  };

  const setShadowSpreadRadius = (radius: number) => {
    if (radius < MIN_SPREAD_RADIUS || radius > MAX_SPREAD_RADIUS) return;

    setShadow((prev) => {
      const updatedShadow: ShadowData = { ...prev, spreadRadius: radius };
      return updatedShadow;
    });
  };

  return { shadow, setShadowVerticalOffset, setShadowHorizontalOffset, setShadowBlurRadius, setShadowSpreadRadius };
};

export default useShadowCreator;
