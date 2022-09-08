import Layout from '@modules/common/layout/components/layout';
import dynamic from 'next/dynamic';
import React, { Suspense } from 'react';

const ShadowGenerator = dynamic(() => import('@modules/tools/shadow-generator/components/shadow-generator'), {
  suspense: true,
});

const ShadowGeneratorPage: React.FC = () => {
  const shadowGeneratorFallback = (): React.ReactNode => {
    return (
      <div className="flex items-center justify-center">
        <span className="text-2xl font-bold text-gray-800">Loading...</span>
      </div>
    );
  };
  return (
    <Layout
      headProps={{
        title: 'Shadow Generator | Frontend Tools',
      }}
    >
      <div className="flex flex-col space-y-4 sm:space-y-6">
        {/* Heading */}
        <div className="block space-y-2 sm:space-y-4">
          <h1 className="text-5xl font-extrabold leading-none tracking-tight text-slate-900 dark:text-slate-200 sm:text-6xl">
            Shadow Generator
          </h1>
          <p className="text-xl font-normal text-slate-900 sm:text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis error consequatur sapiente! Similique, quo.
            Similique.
          </p>
        </div>
        {/* Main Component */}
        <Suspense fallback={shadowGeneratorFallback()}>
          <ShadowGenerator />
        </Suspense>
      </div>
    </Layout>
  );
};

export default ShadowGeneratorPage;
