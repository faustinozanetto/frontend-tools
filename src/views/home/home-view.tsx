import React from 'react';
import HomeAvailableTools from '@modules/home/components/home-available-tools';
import HomeLatestNews from '@modules/home/components/news/home-latests-news';

const HomeView: React.FC = () => {
  return (
    <div className="flex flex-col space-y-4 sm:space-y-6">
      {/* Heading */}
      <div className="block">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200">
          Frontend Tools
        </h1>
        <p className="text-xl sm:text-2xl font-normal text-slate-900">
          Welcome to FrotendTools, the all in one place for the most commonly used tools in web development.
        </p>
      </div>
      {/* Available Tools */}
      <HomeAvailableTools />
      {/* Latests news */}
      <HomeLatestNews />
    </div>
  );
};

export default HomeView;
