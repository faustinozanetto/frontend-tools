export enum GradientType {
  LINEAR = 'Linear',
  RADIAL = 'Radial',
  CONIC = 'Conic',
}

export type GradientColor = {
  color: string;
  position: number;
};

export type GradientData = {
  type: GradientType;
  maxColors: number;
  colors: GradientColor[];
  radialRotation: number;
};
