import React from 'react';

const ShadowGeneratorView: React.FC = () => {
  return (
    <div className="flex flex-col space-y-4 sm:space-y-6">
      {/* Heading */}
      <div className="block">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200">
          Shadow Generator
        </h1>
        <p className="text-xl sm:text-2xl font-normal text-slate-900">
          Welcome to FrotendTools, the all in one place for the most commonly used tools in web development.
        </p>
      </div>
    </div>
  );
};

export default ShadowGeneratorView;
