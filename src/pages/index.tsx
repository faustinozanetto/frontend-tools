import React from 'react';

import Layout from '@modules/layout/components/layout';
import HomeView from '@views/home/home-view';

const HomePage: React.FC = () => {
  return (
    <Layout
      headProps={{
        title: 'Home | Frontend Tools',
      }}
    >
      <HomeView />
    </Layout>
  );
};

export default HomePage;
