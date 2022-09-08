import Layout from '@modules/common/layout/components/layout';
import GradientGeneratorView from '@views/tools/generators/gradient-generator-view';
import React from 'react';

const GradientGeneratorPage: React.FC = () => {
  return (
    <Layout
      headProps={{
        title: 'Gradient Generator | Frontend Tools',
      }}
    >
      <GradientGeneratorView />
    </Layout>
  );
};

export default GradientGeneratorPage;
