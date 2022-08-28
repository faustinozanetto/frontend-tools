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
  tool: ToolData;
}

const ToolCard: React.FC<IToolCardProps> = (props) => {
  const { tool } = props;

  return (
    <div className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden rounded-md">
      <div className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></div>
      <div className="relative w-full h-full px-6 py-3 transition-all ease-out bg-gray-800 rounded-md group-hover:bg-opacity-0 duration-400 dark:bg-gray-200">
        <h3 className="text-2xl font-bold tracking-tight text-white dark:text-gray-900">{tool.name}</h3>
        <p className="font-normal text-gray-200 dark:text-gray-700">{tool.description}</p>
      </div>
    </div>
  );
};

export default ToolCard;
