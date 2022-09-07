import React from 'react';
import { ShadowCollectionData } from '../../types/shadow-collection.types';

interface IShadowCollectionCardProps {
  shadow: ShadowCollectionData;
}

const ShadowCollectionCard: React.FC<IShadowCollectionCardProps> = (props) => {
  const { shadow } = props;

  return <div className="flex p-4"></div>;
};

export default ShadowCollectionCard;
