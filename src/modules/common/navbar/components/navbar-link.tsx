import Link from 'next/link';

export interface INavbarLinkProps {
  /** Href to navigate to when interacted */
  href: string;
  children?: React.ReactNode;
}

const NavbarLink: React.FC<INavbarLinkProps> = (props) => {
  const { href, children } = props;

  return (
    <Link href={href} passHref>
      <span className="block cursor-pointer p-2 text-base font-semibold text-gray-800 hover:rounded-lg hover:bg-violet-200">
        {children}
      </span>
    </Link>
  );
};

export default NavbarLink;
