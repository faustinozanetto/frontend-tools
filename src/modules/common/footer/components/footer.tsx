import React from 'react';
import FooterLink from './footer-link';

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col items-center justify-center p-4 text-center">
      {/* Links */}
      <div className="flex flex-row items-center justify-center">
        <FooterLink href="/">Home</FooterLink>
        <FooterLink href="/privacy">Privacy</FooterLink>
        <FooterLink href="/about">About</FooterLink>
        <FooterLink href="/terms">Terms</FooterLink>
      </div>
    </footer>
  );
};

export default Footer;
