import React from 'react';

import ShadowGeneratorProvider from '../context/shadow-generator-context';
import ShadowGeneratorEdit from './edit/shadow-generator-edit';
import ShadowGeneratorResult from './result/shadow-generator-result';

const ShadowGenerator: React.FC = () => {
  return (
    <ShadowGeneratorProvider>
      {/* Editor */}
      <ShadowGeneratorEdit />
      {/* Results */}
      <ShadowGeneratorResult />
    </ShadowGeneratorProvider>
  );
};

export default ShadowGenerator;
