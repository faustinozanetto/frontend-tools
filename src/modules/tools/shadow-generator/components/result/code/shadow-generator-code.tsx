import Button from '@modules/ui/components/button/button';
import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { shadesOfPurple } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

interface IShadowGeneratorResultCodeProps {
  /** CSS shadow style */
  shadowStyle: string;
}

const ShadowGeneratorResultCode: React.FC<IShadowGeneratorResultCodeProps> = (props) => {
  const { shadowStyle } = props;

  const handleCodeCopy = (_event: React.MouseEvent<HTMLButtonElement>): void => {
    // TODO: implement
  };

  return (
    <div className="flex flex-col space-y-2 rounded-lg bg-gray-100 p-4 sm:space-y-4">
      <div className="flex flex-row items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Code Snippet</h2>
        <Button size="sm" onClick={handleCodeCopy}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z"
            />
          </svg>
        </Button>
      </div>
      {/* Container */}
      <div className="flex items-center justify-center">
        <SyntaxHighlighter
          language="css"
          style={shadesOfPurple}
          wrapLongLines
          customStyle={{
            backgroundColor: 'white',
            padding: '1rem',
            width: '100%',
            borderRadius: '1rem',
          }}
        >{`box-shadow: ${shadowStyle}`}</SyntaxHighlighter>
      </div>
    </div>
  );
};

export default ShadowGeneratorResultCode;
