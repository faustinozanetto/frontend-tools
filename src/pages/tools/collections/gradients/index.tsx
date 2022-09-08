import Layout from '@modules/common/layout/components/layout';
import GradientCollectionView from '@views/tools/collections/gradient-collection-view';
import React from 'react';

const GradientCollectionPage: React.FC = () => {
  return (
    <Layout
      headProps={{
        title: 'Gradient Collection | Frontend Tools',
      }}
    >
      <GradientCollectionView />
    </Layout>
  );
};

export default GradientCollectionPage;
