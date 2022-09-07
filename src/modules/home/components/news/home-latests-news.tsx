import { LATEST_NEWS } from '@modules/home/utils/home.constants';
import React from 'react';
import HomeLatestNew from './home-latests-new';

const HomeLatestNews: React.FC = () => {
  return (
    <div className="block">
      <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200">
        Latest News
      </h2>
      <p className="text-xl sm:text-2xl font-normal text-slate-900">
        Welcome to FrotendTools, the all in one place for the most commonly used tools in web development.
      </p>
      <div className="flex flex-col space-y-4 mt-4">
        {LATEST_NEWS.map((latestNew) => {
          return <HomeLatestNew key={latestNew.title} latestNew={latestNew} />;
        })}
      </div>
    </div>
  );
};

export default HomeLatestNews;
