import ButtonLink from '@modules/ui/components/button/button-link';
import React from 'react';

export type ToolData = {
  /** Name of the tool */
  name: string;
  /** Brief description of the tool */
  description: string;
  /** Href path to the tool. */
  path: string;
};

interface IToolCardProps {
  /** Tool data */
  tool: ToolData;
}

const ToolCard: React.FC<IToolCardProps> = (props) => {
  const { tool } = props;

  return (
    <div className="flex flex-col space-y-2 relative w-full p-4 justify-between bg-gray-100 rounded-md">
      {/* Name */}
      <h3 className="text-2xl font-bold tracking-tight text-gray-900">{tool.name}</h3>
      {/* Description */}
      <p className="font-normal text-gray-800 ">{tool.description}</p>
      {/* Project path */}
      <ButtonLink href={tool.path}>Navigate to</ButtonLink>
    </div>
  );
};

export default ToolCard;
