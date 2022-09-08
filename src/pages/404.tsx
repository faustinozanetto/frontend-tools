import Layout from '@modules/common/layout/components/layout';
import ButtonLink from '@modules/ui/components/button/button-link';
import React from 'react';

const NotFoundPage: React.FC = () => {
  return (
    <Layout
      headProps={{
        title: 'Not Found | Frontend Tools',
        description:
          'Frontend Tools is a colecction of tools that are commonly used in frontend web development such as gradient editor, shadow generator, etc.',
        url: 'https://frontendtools.io',
      }}
    >
      <div className="flex flex-col items-center justify-center space-y-4 text-center sm:space-y-6">
        {/* Heading */}
        <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-200 sm:text-6xl">
          Not Found
        </h1>
        <p className="text-xl font-normal text-slate-900 sm:text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia odit sit assumenda veniam qui dolores
          perferendis officia alias et quam.
        </p>
        <ButtonLink size="lg" href="/">
          Go Home
        </ButtonLink>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
