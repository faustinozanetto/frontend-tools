import { v4 as uuidv4 } from 'uuid';

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
  id: uuidv4(),
  horizontalOffset: 0,
  verticalOffset: 10,
  blurRadius: 15,
  spreadRadius: -4,
  color: 'rgba(0,0,0,0.15)',
  inset: false,
};
