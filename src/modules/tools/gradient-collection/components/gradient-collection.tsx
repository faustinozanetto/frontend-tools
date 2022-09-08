import CollectionCard from '@modules/collection/components/collection-card';
import React from 'react';

import { GRADIENT_COLLECTION } from '../utils/gradient-collection.constants';

const GradientCollection: React.FC = () => {
  return (
    <div className="grid items-stretch gap-4 sm:grid-cols-2 md:grid-cols-3">
      {GRADIENT_COLLECTION.length > 0 &&
        GRADIENT_COLLECTION.map((gradient, index) => {
          return (
            <CollectionCard
              key={gradient.id}
              index={index}
              style={{
                background: gradient.gradient,
                boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
              }}
            />
          );
        })}
    </div>
  );
};

export default GradientCollection;
