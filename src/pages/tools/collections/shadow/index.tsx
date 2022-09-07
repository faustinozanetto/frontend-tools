import React from 'react';

import Layout from '@modules/common/layout/components/layout';
import ShadowCollectionView from '@views/tools/collections/shadow-collection-view';

const ShadowCollectionPage: React.FC = () => {
  return (
    <Layout
      headProps={{
        title: 'Shadow Collection | Frontend Tools',
      }}
    >
      <ShadowCollectionView />
    </Layout>
  );
};

export default ShadowCollectionPage;
