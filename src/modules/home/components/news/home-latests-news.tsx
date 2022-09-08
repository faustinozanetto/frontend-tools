import { LATEST_NEWS } from '@modules/home/utils/home.constants';
import React from 'react';

import HomeLatestNew from './home-latests-new';

const HomeLatestNews: React.FC = () => {
  return (
    <div className="block">
      <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-200 sm:text-5xl">
        Latest News
      </h2>
      <p className="text-xl font-normal text-slate-900 sm:text-2xl">
        Welcome to FrotendTools, the all in one place for the most commonly used tools in web development.
      </p>
      <div className="mt-4 flex flex-col space-y-4">
        {LATEST_NEWS.map((latestNew) => {
          return <HomeLatestNew key={latestNew.title} latestNew={latestNew} />;
        })}
      </div>
    </div>
  );
};

export default HomeLatestNews;
