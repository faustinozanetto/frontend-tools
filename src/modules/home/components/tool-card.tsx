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
    <div className="relative flex w-full flex-col justify-between space-y-2 rounded-md border-2 border-violet-300 bg-gray-100 p-4 drop-shadow-xl">
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
