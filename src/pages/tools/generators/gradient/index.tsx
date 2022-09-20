import Layout from '@modules/common/layout/components/layout';
import GradientGenerator from '@modules/tools/gradient-generator/components/gradient-generator';
import React from 'react';

const GradientGeneratorPage: React.FC = () => {
  return (
    <Layout
      headProps={{
        title: 'Gradient Generator | Frontend Tools',
        description: 'Generate custom and good looking gradients in a couple of steps.',
      }}
    >
      <div className="flex flex-col space-y-4 sm:space-y-6">
        {/* Heading */}
        <div className="block space-y-2 sm:space-y-4">
          <h1 className="text-5xl font-extrabold leading-none tracking-tight text-slate-900 dark:text-slate-200 sm:text-6xl">
            Gradient Generator
          </h1>
          <p className="text-lg font-normal text-slate-900 sm:text-xl md:text-2xl">
            Generate custom and good looking gradients in a couple of steps. Choose from differenty gradient types and
            color stops.
          </p>
        </div>
        {/* Main Component */}
        <GradientGenerator />
      </div>
    </Layout>
  );
};

export default GradientGeneratorPage;
