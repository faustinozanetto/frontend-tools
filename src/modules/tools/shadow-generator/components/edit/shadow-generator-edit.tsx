import React from 'react';
import useShadowGeneratorContext from '../../hooks/use-shadow-generator-context';
import ShadowGeneratorAdd from './shadow-generator-add';
import ShadowGeneratorEntry from './shadow-generator-entry';

const ShadowGeneratorEdit: React.FC = () => {
  const { shadows } = useShadowGeneratorContext();

  return (
    <div className="flex flex-col bg-gray-100 p-4 rounded-lg space-y-2 sm:space-y-4">
      <ShadowGeneratorAdd />
      {shadows.length > 0 && (
        <div className="flex flex-col space-y-2">
          {shadows.map((shadow) => (
            <ShadowGeneratorEntry key={shadow.id} shadowId={shadow.id!} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ShadowGeneratorEdit;
