export type ShadowData = {
  id: string;
  horizontalOffset: number;
  verticalOffset: number;
  blurRadius: number;
  spreadRadius: number;
  inset: boolean;
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
