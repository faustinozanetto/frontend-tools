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
      <span className="cursor-pointer rounded-lg py-2 px-3 text-sm font-semibold text-violet-800 hover:bg-violet-300 focus:outline-none focus:ring-4 focus:ring-violet-300">
        {children}
      </span>
    </Link>
  );
};

export default NavbarLink;
