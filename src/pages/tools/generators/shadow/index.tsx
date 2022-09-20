import Layout from '@modules/common/layout/components/layout';
import ShadowGenerator from '@modules/tools/shadow-generator/components/shadow-generator';
import React from 'react';

const ShadowGeneratorPage: React.FC = () => {
  return (
    <Layout
      headProps={{
        title: 'Shadow Generator | Frontend Tools',
        description: 'Generate good looking and complex box shadows for your personal project in a matter of seconds.',
      }}
    >
      <div className="flex flex-col space-y-4 sm:space-y-6">
        {/* Heading */}
        <div className="block space-y-2 sm:space-y-4">
          <h1 className="text-5xl font-extrabold leading-none tracking-tight text-slate-900 dark:text-slate-200 sm:text-6xl">
            Shadow Generator
          </h1>
          <p className="text-lg font-normal text-slate-900 sm:text-xl md:text-2xl">
            Generate good looking and complex box shadows for your personal project in a matter of seconds.
          </p>
        </div>
        {/* Main Component */}
        <ShadowGenerator />
      </div>
    </Layout>
  );
};

export default ShadowGeneratorPage;
