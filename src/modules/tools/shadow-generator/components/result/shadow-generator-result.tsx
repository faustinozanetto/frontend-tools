import React from 'react';
import useShadowGeneratorContext from '../../hooks/use-shadow-generator-context';
import useShadowResults from '../../hooks/use-shadow-results';

const ShadowGeneratorResult: React.FC = () => {
  const { shadows } = useShadowGeneratorContext();
  const { shadowStyle } = useShadowResults(shadows);

  return (
    <div className="flex flex-col bg-gray-100 p-4 rounded-lg space-y-2 sm:space-y-4">
      <h2 className="text-2xl font-bold text-gray-900">Results</h2>
      {/* Container */}
      <div className="flex justify-center items-center bg-gray-100 p-4">
        {/* Example Box */}
        <div
          className="bg-white rounded-lg w-40 h-40"
          style={{
            boxShadow: shadowStyle,
          }}
        ></div>
      </div>
    </div>
  );
};

export default ShadowGeneratorResult;
