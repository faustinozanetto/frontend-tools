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
    <div className="absolute z-20 top-0 inset-x-0 flex justify-center overflow-hidden">
      {/* SEO Head */}
      <LayoutHead {...headProps} />

      <main className="max-w-4xl mx-auto p-4 sm:p-6 md:p-8">
        {/* Children */}
        {children}
      </main>
    </div>
  );
};

export default Layout;
