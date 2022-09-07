import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';

const GradientGenerator = dynamic(() => import('@modules/tools/gradient-generator/components/gradient-generator'), {
  suspense: true,
});

const GradientGeneratorView: React.FC = () => {
  const gradientGeneratorFallback = (): React.ReactNode => {
    return (
      <div className="flex items-center justify-center">
        <span className="font-bold text-2xl text-gray-800">Loading...</span>
      </div>
    );
  };

  return (
    <div className="flex flex-col space-y-4 sm:space-y-6">
      {/* Heading */}
      <div className="block space-y-2 sm:space-y-4">
        <h1 className="text-5xl sm:text-6xl leading-none font-extrabold text-slate-900 tracking-tight dark:text-slate-200">
          Gradient Generator
        </h1>
        <p className="text-xl sm:text-2xl font-normal text-slate-900">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis error consequatur sapiente! Similique, quo.
          Similique.
        </p>
      </div>
      {/* Main Component */}
      <Suspense fallback={gradientGeneratorFallback()}>
        <GradientGenerator />
      </Suspense>
    </div>
  );
};

export default GradientGeneratorView;
