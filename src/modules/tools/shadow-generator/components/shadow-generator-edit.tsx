import React from 'react';
import { ShadowData } from '../types/shadow-generator.types';

interface IShadowGeneratorEditProps {
  shadow: ShadowData;
}

const ShadowGeneratorEdit: React.FC<IShadowGeneratorEditProps> = (props) => {
  const { shadow } = props;

  return <div>{shadow.id}</div>;
};

export default ShadowGeneratorEdit;
