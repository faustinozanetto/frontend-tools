import React from 'react';

const Navbar: React.FC = () => {
  return (
    <div className="supports-backdrop-blur:bg-white/95 sticky top-0 z-40 w-full  flex-none bg-white dark:border-slate-50/[0.06] dark:bg-slate-900/75">
      <div className="mx-auto max-w-8xl">
        <div className="mx-4 py-4 lg:mx-0 lg:px-8">
          <div className="relative flex items-center">
            {/* Logo */}
            <div className="mr-3 flex-none overflow-hidden md:w-auto">
              <span className="text-3xl font-bold text-violet-600">Frontend Tools T</span>
            </div>
            {/* Links */}
            <div className="relative ml-auto hidden items-center lg:flex"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
