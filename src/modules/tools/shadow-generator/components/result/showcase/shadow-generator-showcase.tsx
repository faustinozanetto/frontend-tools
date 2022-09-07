import React from 'react';

interface IShadowGeneratorShowcaseProps {
  shadowStyle: string;
}

const ShadowGeneratorShowcase: React.FC<IShadowGeneratorShowcaseProps> = (props) => {
  const { shadowStyle } = props;

  return (
    <div className="flex flex-col bg-gray-100 p-4 rounded-lg space-y-2 sm:space-y-4">
      <h2 className="text-2xl font-bold text-gray-900">Results</h2>
      {/* Container */}
      <div className="flex justify-center items-center bg-gray-100 p-6">
        {/* Example Box */}
        <div
          className="bg-white rounded-lg w-60 h-60"
          style={{
            boxShadow: shadowStyle,
          }}
        ></div>
      </div>
    </div>
  );
};

export default ShadowGeneratorShowcase;
