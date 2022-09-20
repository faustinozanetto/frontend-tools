import Layout from '@modules/common/layout/components/layout';
import GradientCollection from '@modules/tools/gradient-collection/components/gradient-collection';
import React from 'react';

const GradientCollectionPage: React.FC = () => {
  return (
    <Layout
      headProps={{
        title: 'Gradient Collection | Frontend Tools',
        description: '  Browse a curated collection of hand generated box shadows for your projects.',
      }}
    >
      <div className="flex flex-col space-y-4 sm:space-y-6">
        {/* Heading */}
        <div className="block space-y-2 sm:space-y-4">
          <h1 className="text-5xl font-extrabold leading-none tracking-tight text-slate-900 dark:text-slate-200 sm:text-6xl">
            Gradients Collection
          </h1>
          <p className="text-lg font-normal text-slate-900 sm:text-xl md:text-2xl">
            Browse a curated collection of hand generated box shadows for your projects.
          </p>
        </div>
        {/* Main Component */}
        <GradientCollection />
      </div>
    </Layout>
  );
};

export default GradientCollectionPage;
