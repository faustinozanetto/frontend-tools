import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col p-4 items-center justify-center">
      <span className="text-sm text-gray-800 sm:text-center dark:text-gray-800">
        © 2022{' '}
        <a href="https://flowbite.com/" className="hover:underline">
          Faustino Zanetto
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
