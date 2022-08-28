import React from 'react';
import ToolCard, { ToolData } from './tool-card';

const TOOLS: ToolData[] = [
  {
    name: 'Shadow Generator',
    description: 'Create beautiful and clean shadows with this generator in just a few steps.',
    path: '/tools/shadow-generator',
  },
];

const HomeAvailableTools: React.FC = () => {
  return (
    <div className="flex flex-col">
      <div className="block mb-2 sm:mb-4">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200">
          Available Tools
        </h2>
      </div>

      {/* Tools */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {TOOLS.map((tool, index) => {
          return <ToolCard key={tool.name} tool={tool} />;
        })}
      </div>
    </div>
  );
};

export default HomeAvailableTools;
