export enum GradientType {
  LINEAR = 'Linear',
  RADIAL = 'Radial',
  CONIC = 'Conic',
}

export type GradientColor = {
  /** Gradient color */
  color: string;
  /** Gradient stop position. */
  position: number;
};

export type GradientData = {
  /** Type of the gradient */
  type: GradientType;
  /** Max amount of colors */
  maxColors: number;
  /** Gradient colors array */
  colors: GradientColor[];
  /** Gradient rotation in radians */
  radialRotation: number;
};
