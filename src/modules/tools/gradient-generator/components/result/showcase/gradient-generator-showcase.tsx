import React from 'react';

interface IGradientGeneratorShowcaseProps {
  gradientStyle: string;
}

const GradientGeneratorShowcase: React.FC<IGradientGeneratorShowcaseProps> = (props) => {
  const { gradientStyle } = props;

  return (
    <div className="flex flex-col bg-gray-100 p-4 rounded-lg space-y-2 sm:space-y-4">
      <h2 className="text-2xl font-bold text-gray-900">Results</h2>
      {/* Container */}
      <div
        className="flex w-full rounded-xl h-40 sm:h-60"
        style={{
          background: gradientStyle,
        }}
      ></div>
    </div>
  );
};

export default GradientGeneratorShowcase;
