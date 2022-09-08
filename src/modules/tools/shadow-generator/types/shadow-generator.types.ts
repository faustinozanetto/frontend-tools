export type ShadowData = {
  /** Shadow id */
  id: string;
  /** Shadow horizontal offset */
  horizontalOffset: number;
  /** Shadow vertical offset */
  verticalOffset: number;
  /** Shadow blur radius */
  blurRadius: number;
  /** Shadow spread radius */
  spreadRadius: number;
  /** Shadow inset */
  inset: boolean;
  /** Shadow color */
  color: string;
};

export const defaultShadow: ShadowData = {
  id: '1',
  horizontalOffset: 40,
  verticalOffset: 20,
  blurRadius: 70,
  spreadRadius: -20,
  color: '#0eccff8f',
  inset: false,
};
