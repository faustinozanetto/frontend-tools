import React from 'react';

interface IShadowGeneratorShowcaseProps {
  shadowStyle: string;
}

const ShadowGeneratorShowcase: React.FC<IShadowGeneratorShowcaseProps> = (props) => {
  const { shadowStyle } = props;

  return (
    <div className="flex flex-col space-y-2 rounded-lg bg-gray-100 p-4 sm:space-y-4">
      <h2 className="text-2xl font-bold text-gray-900">Results</h2>
      {/* Container */}
      <div className="flex items-center justify-center bg-gray-100 p-6">
        {/* Example Box */}
        <div
          className="h-60 w-60 rounded-lg bg-white"
          style={{
            boxShadow: shadowStyle,
          }}
        ></div>
      </div>
    </div>
  );
};

export default ShadowGeneratorShowcase;
