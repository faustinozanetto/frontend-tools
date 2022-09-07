import Button from '@modules/ui/components/button/button';
import React from 'react';
import useShadowGeneratorContext from '../../hooks/use-shadow-generator-context';
import useShadowResults from '../../hooks/use-shadow-results';

const ShadowGeneratorResult: React.FC = () => {
  const { shadows } = useShadowGeneratorContext();
  const { shadowStyle } = useShadowResults(shadows);

  return (
    <div className="flex flex-col bg-gray-100 p-4 rounded-lg space-y-2 sm:space-y-4">
      <div className="flex flex-row justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Results</h2>
        <Button size="sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
            />
          </svg>
        </Button>
      </div>
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

export default ShadowGeneratorResult;
