import Layout from '@modules/common/layout/components/layout';
import HomeAvailableTools from '@modules/home/components/home-available-tools';
import HomeLatestNews from '@modules/home/components/news/home-latests-news';
import React from 'react';

const HomePage: React.FC = () => {
  return (
    <Layout
      headProps={{
        title: 'Home | Frontend Tools',
        description:
          'Frontend Tools is a colecction of tools that are commonly used in frontend web development such as gradient editor, shadow generator, etc.',
        url: 'https://frontendtools.io',
      }}
    >
      <div className="flex flex-col space-y-4 sm:space-y-6">
        {/* Heading */}
        <div className="block">
          <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-200 sm:text-6xl">
            Frontend Tools
          </h1>
          <p className="text-lg font-normal text-slate-900 sm:text-xl md:text-2xl">
            Welcome to FrotendTools, the all in one place for the most commonly used tools in web development.
          </p>
        </div>
        {/* Available Tools */}
        <HomeAvailableTools />
        {/* Latests news */}
        <HomeLatestNews />
      </div>
    </Layout>
  );
};

export default HomePage;
