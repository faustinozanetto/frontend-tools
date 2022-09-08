import React from 'react';

interface IGradientGeneratorShowcaseProps {
  /** Gradient css style */
  gradientStyle: string;
}

const GradientGeneratorShowcase: React.FC<IGradientGeneratorShowcaseProps> = (props) => {
  const { gradientStyle } = props;

  return (
    <div className="flex flex-col space-y-2 rounded-lg bg-gray-100 p-4 sm:space-y-4">
      <h2 className="text-2xl font-bold text-gray-900">Results</h2>
      {/* Container */}
      <div
        className="flex h-40 w-full rounded-xl sm:h-60"
        style={{
          background: gradientStyle,
        }}
      ></div>
    </div>
  );
};

export default GradientGeneratorShowcase;
