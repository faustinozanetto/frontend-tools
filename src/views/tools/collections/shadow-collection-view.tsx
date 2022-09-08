import ShadowCollection from '@modules/tools/shadow-collection/components/shadow-collection';
import React from 'react';

const ShadowCollectionView: React.FC = () => {
  return (
    <div className="flex flex-col space-y-4 sm:space-y-6">
      {/* Heading */}
      <div className="block space-y-2 sm:space-y-4">
        <h1 className="text-5xl font-extrabold leading-none tracking-tight text-slate-900 dark:text-slate-200 sm:text-6xl">
          Shadows Collection
        </h1>
        <p className="text-xl font-normal text-slate-900 sm:text-2xl">
          Browse a curated collection of hand generated box shadows for your projects.
        </p>
      </div>
      {/* Main Component */}
      <ShadowCollection />
    </div>
  );
};

export default ShadowCollectionView;
