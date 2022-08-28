import Navbar from '@modules/navbar/components/navbar';
import React from 'react';
import LayoutHead from './layout-head';

interface ILayoutProps {
  /** Children to render inside the layout. */
  children?: React.ReactNode;
  /** Head props passed to the head component. */
  headProps?: React.ComponentPropsWithoutRef<typeof LayoutHead>;
}

const Layout: React.FC<ILayoutProps> = (props) => {
  const { children, headProps } = props;

  return (
    <main>
      {/* SEO Head */}
      <LayoutHead {...headProps} />

      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <div className="max-w-4xl mx-auto p-4 sm:p-6 md:p-8">
        {/* Children */}
        {children}
      </div>
    </main>
  );
};

export default Layout;
