import React from 'react';

const Navbar: React.FC = () => {
  return (
    <div className="sticky top-0 z-40 w-full flex-none  dark:border-slate-50/[0.06] bg-white supports-backdrop-blur:bg-white/95 dark:bg-slate-900/75">
      <div className="max-w-8xl mx-auto">
        <div className="py-4 lg:px-8 mx-4 lg:mx-0">
          <div className="relative flex items-center">
            {/* Logo */}
            <div className="mr-3 flex-none overflow-hidden md:w-auto">
              <span className="font-bold text-3xl text-violet-600">Frontend Tools</span>
            </div>
            {/* Links */}
            <div className="relative hidden lg:flex items-center ml-auto"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
