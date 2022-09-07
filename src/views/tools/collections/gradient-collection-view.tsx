import GradientCollection from '@modules/tools/gradient-collection/components/gradient-collection';
import React from 'react';

const GradientCollectionView: React.FC = () => {
  return (
    <div className="flex flex-col space-y-4 sm:space-y-6">
      {/* Heading */}
      <div className="block space-y-2 sm:space-y-4">
        <h1 className="text-5xl sm:text-6xl leading-none font-extrabold text-slate-900 tracking-tight dark:text-slate-200">
          Gradients Collection
        </h1>
        <p className="text-xl sm:text-2xl font-normal text-slate-900">
          Browse a curated collection of hand generated box shadows for your projects.
        </p>
      </div>
      {/* Main Component */}
      <GradientCollection />
    </div>
  );
};

export default GradientCollectionView;
