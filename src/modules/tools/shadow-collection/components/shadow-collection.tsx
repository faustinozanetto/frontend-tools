import React from 'react';
import { SHADOW_COLLECTION } from '../utils/shadow-collection-constants';
import ShadowCollectionCard from './card/shadow-collection-card';

const ShadowCollection: React.FC = () => {
  return (
    <div className="grid gap-4 items-center justify-center sm:grid-cols-2 md:grid-cols-3">
      {SHADOW_COLLECTION.length > 0 &&
        SHADOW_COLLECTION.map((shadow) => {
          return <ShadowCollectionCard key={shadow.id} shadow={shadow} />;
        })}
    </div>
  );
};

export default ShadowCollection;
