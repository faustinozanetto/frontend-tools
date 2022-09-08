import CollectionCard from '@modules/collection/components/collection-card';
import React from 'react';

import { SHADOW_COLLECTION } from '../utils/shadow-collection-constants';

const ShadowCollection: React.FC = () => {
  return (
    <div className="grid items-stretch gap-4 sm:grid-cols-2 md:grid-cols-3">
      {SHADOW_COLLECTION.length > 0 &&
        SHADOW_COLLECTION.map((shadow, index) => {
          return <CollectionCard key={shadow.id} index={index} style={{ boxShadow: shadow.shadowStyle }} />;
        })}
    </div>
  );
};

export default ShadowCollection;
