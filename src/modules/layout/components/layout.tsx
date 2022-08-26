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
    <div className="flex flex-col min-h-screen overflow-hidden subpixel-antialiased transition-all">
      {/* SEO Head */}
      <LayoutHead {...headProps} />

      <main className="max-w-xl mx-auto w-full">
        {/* Children */}
        {children}
      </main>
    </div>
  );
};

export default Layout;
