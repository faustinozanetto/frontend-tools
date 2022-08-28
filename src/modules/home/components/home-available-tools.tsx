import React from 'react';
import ToolCard, { ToolData } from './tool-card';

const TOOLS: ToolData[] = [
  {
    name: 'Shadow Generator',
    description: 'Create beautiful and clean shadows with this generator in just a few steps.',
    path: '/tools/shadow-generator',
  },
  {
    name: 'Gradient Generator',
    description: 'Create stunning gradients with a few steps and make your websiste stand out.',
    path: '/tools/gradient-generator',
  },
  {
    name: 'Shadows Collection',
    description: 'A collection of simple and ellegant drop shadows to enhance your website.',
    path: '/collections/shadows',
  },
  {
    name: 'Gradients Collection',
    description: 'A collection of hand crafted and beautiful gradients ready to make your website look amazing.',
    path: '/collections/gradients',
  },
];

const HomeAvailableTools: React.FC = () => {
  return (
    <div className="flex flex-col items-start justify-center w-full h-full">
      <div className="block mb-2 sm:mb-4">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200">
          Available Tools
        </h2>
      </div>

      {/* Tools */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {TOOLS.map((tool, index) => {
          return <ToolCard key={tool.name} tool={tool} />;
        })}
      </div>
    </div>
  );
};

export default HomeAvailableTools;
