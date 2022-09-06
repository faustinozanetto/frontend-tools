import React from 'react';

import Layout from '@modules/common/layout/components/layout';
import HomeView from '@views/home/home-view';

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
      <HomeView />
    </Layout>
  );
};

export default HomePage;
