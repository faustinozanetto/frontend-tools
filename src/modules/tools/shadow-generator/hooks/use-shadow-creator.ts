import { useState } from 'react';

import type { ShadowData } from '../types/shadow-generator.types';
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

/**
 * Use shadow creator hook, used to create a single shadow with custom parameters
 * @param entryShadow Shadow data to use in the creator
 * @returns
 */
const useShadowCreator = (entryShadow: ShadowData) => {
  const [shadow, setShadow] = useState<ShadowData>(entryShadow);

  /**
   * Updates the shadow vertical offset if in range
   * @param offset New offset
   * @returns void
   */
  const setShadowVerticalOffset = (offset: ShadowData['verticalOffset']) => {
    if (offset < MIN_V_OFFSET || offset > MAX_V_OFFSET) return;

    setShadow((prev) => {
      const updatedShadow: ShadowData = { ...prev, verticalOffset: offset };
      return updatedShadow;
    });
  };

  /**
   * Updates the shadow horiztonal offset if in range
   * @param offset New offset
   * @returns void
   */
  const setShadowHorizontalOffset = (offset: ShadowData['horizontalOffset']) => {
    if (offset < MIN_H_OFFSET || offset > MAX_H_OFFSET) return;

    setShadow((prev) => {
      const updatedShadow: ShadowData = { ...prev, horizontalOffset: offset };
      return updatedShadow;
    });
  };

  /**
   * Updates the shadow blur radius if in range
   * @param radius New radius
   * @returns void
   */
  const setShadowBlurRadius = (radius: ShadowData['blurRadius']) => {
    if (radius < MIN_BLUR_RADIUS || radius > MAX_BLUR_RADIUS) return;

    setShadow((prev) => {
      const updatedShadow: ShadowData = { ...prev, blurRadius: radius };
      return updatedShadow;
    });
  };

  /**
   * Updates the shadow spread radius if in range
   * @param radius New radius
   * @returns void
   */
  const setShadowSpreadRadius = (radius: ShadowData['spreadRadius']) => {
    if (radius < MIN_SPREAD_RADIUS || radius > MAX_SPREAD_RADIUS) return;

    setShadow((prev) => {
      const updatedShadow: ShadowData = { ...prev, spreadRadius: radius };
      return updatedShadow;
    });
  };

  /**
   * Updates the shadow color
   * @param color New color
   */
  const setShadowColor = (color: ShadowData['color']) => {
    setShadow((prev) => {
      const updatedShadow: ShadowData = { ...prev, color };
      return updatedShadow;
    });
  };

  /**
   * Updates the shadow inset attribute.
   * @param inset New inset
   */
  const setShadowIsInset = (inset: ShadowData['inset']) => {
    setShadow((prev) => {
      const updatedShadow: ShadowData = { ...prev, inset };
      return updatedShadow;
    });
  };

  return {
    shadow,
    setShadowVerticalOffset,
    setShadowHorizontalOffset,
    setShadowBlurRadius,
    setShadowSpreadRadius,
    setShadowColor,
    setShadowIsInset,
  };
};

export default useShadowCreator;
