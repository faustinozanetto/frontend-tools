import CollectionCard from '@modules/collection/components/collection-card';
import React from 'react';
import { GRADIENT_COLLECTION } from '../utils/gradient-collection.constants';

const GradientCollection: React.FC = () => {
  return (
    <div className="grid gap-4 items-stretch sm:grid-cols-2 md:grid-cols-3">
      {GRADIENT_COLLECTION.length > 0 &&
        GRADIENT_COLLECTION.map((gradient, index) => {
          return (
            <CollectionCard
              key={gradient.id}
              index={index}
              style={{
                background: gradient.gradient,
              }}
            />
          );
        })}
    </div>
  );
};

export default GradientCollection;
