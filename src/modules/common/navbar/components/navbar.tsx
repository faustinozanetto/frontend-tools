import Link from 'next/link';
import React from 'react';

import type { INavbarLinkProps } from './navbar-link';
import NavbarLink from './navbar-link';

const NAVBAR_LINKS: INavbarLinkProps[] = [
  {
    href: '/',
    children: 'Home',
  },
  {
    href: '/tools',
    children: 'Tools',
  },
];

const Navbar: React.FC = () => {
  return (
    <div className="sticky top-0 z-50 w-full flex-none text-sm font-semibold leading-6 text-slate-900">
      <nav className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center py-[2.125rem]">
          {/* Logo */}
          <Link href="/">
            <span className="mr-auto flex-none text-3xl font-bold text-violet-500">Frontend Tools</span>
          </Link>
          {/* Content */}
          <div className="hidden sm:space-x-4 lg:flex lg:items-center">
            {NAVBAR_LINKS.map((link, index) => {
              return (
                <NavbarLink key={index} href={link.href}>
                  {link.children}
                </NavbarLink>
              );
            })}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
