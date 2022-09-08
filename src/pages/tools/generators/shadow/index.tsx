import Layout from '@modules/common/layout/components/layout';
import ShadowGeneratorView from '@views/tools/generators/shadow-generator-view';
import React from 'react';

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
