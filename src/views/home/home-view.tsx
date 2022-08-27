import Button from '@modules/ui/components/button/button';
import React from 'react';

const HomeView: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Heading */}
      <div className="block">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200">
          Frontend Tools
        </h1>
        <p className="text-xl sm:text-2xl font-normal text-slate-900">
          Welcome to FrotendTools, the all in one place for the most commonly used tools in web development.
        </p>
      </div>
      {/* Learn more button */}
      <div className="flex items-center justify-center w-full h-full button">
        <Button onClick={() => alert('Mati negro')}>Learn More</Button>
      </div>
    </div>
  );
};

export default HomeView;
