import React from 'react';

import type { ToolData } from './tool-card';
import ToolCard from './tool-card';

const TOOLS: ToolData[] = [
  {
    name: 'Shadow Generator',
    description: 'Create beautiful and clean shadows with this generator in just a few steps.',
    path: '/tools/generators/shadow',
  },
  {
    name: 'Gradient Generator',
    description: 'Create stunning gradients with a few steps and make your websiste stand out.',
    path: '/tools/generators/gradient',
  },
  {
    name: 'Shadows Collection',
    description: 'A collection of simple and ellegant drop shadows to enhance your website.',
    path: '/tools/collections/shadows',
  },
  {
    name: 'Gradients Collection',
    description: 'A collection of hand crafted and beautiful gradients ready to make your website look amazing.',
    path: '/tools/collections/gradients',
  },
];

const HomeAvailableTools: React.FC = () => {
  return (
    <div className="flex h-full w-full flex-col items-start justify-center">
      <div className="mb-2 block sm:mb-4">
        <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-200 sm:text-5xl">
          Available Tools
        </h2>
      </div>

      {/* Tools */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {TOOLS.map((tool) => {
          return <ToolCard key={tool.name} tool={tool} />;
        })}
      </div>
    </div>
  );
};

export default HomeAvailableTools;
