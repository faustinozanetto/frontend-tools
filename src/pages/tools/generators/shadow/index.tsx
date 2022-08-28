import React from 'react';

import Layout from '@modules/layout/components/layout';
import ShadowGeneratorView from '@views/tools/generators/shadow-generator-view';

const ShadowGeneratorPage: React.FC = () => {
  return (
    <Layout
      headProps={{
        title: 'Shadow Generator | Frontend Tools',
      }}
    >
      <ShadowGeneratorView />
    </Layout>
  );
};

export default ShadowGeneratorPage;
