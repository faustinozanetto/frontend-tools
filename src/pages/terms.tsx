import Layout from '@modules/common/layout/components/layout';
import React from 'react';

const TermsPage: React.FC = () => {
  return (
    <Layout
      headProps={{
        title: 'Terms | Frontend Tools',
        description:
          'Frontend Tools is a colecction of tools that are commonly used in frontend web development such as gradient editor, shadow generator, etc.',
        url: 'https://frontendtools.io',
      }}
    >
      <div className="flex flex-col items-center justify-center space-y-4 text-center sm:space-y-6">
        {/* Heading */}
        <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-200 sm:text-6xl">
          Terms & Conditions
        </h1>
        <p className="text-lg font-normal text-slate-900 sm:text-xl md:text-2xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum aliquam sapiente, eum culpa, pariatur
          repellendus exercitationem quaerat laudantium quos architecto quas nostrum, molestias impedit qui a nihil sit
          optio fuga?
        </p>
        <p className="text-lg font-normal text-slate-900 sm:text-xl md:text-2xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum aliquam sapiente, eum culpa, pariatur
          repellendus exercitationem quaerat laudantium quos architecto quas nostrum, molestias impedit qui a nihil sit
          optio fuga?
        </p>
      </div>
    </Layout>
  );
};

export default TermsPage;
