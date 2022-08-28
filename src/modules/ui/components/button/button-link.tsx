import Link from 'next/link';
import React from 'react';
import Button from './button';

type IButtonLinkProps = React.ComponentPropsWithRef<typeof Button> & {
  children?: React.ReactNode;
  /** Path to navigate. */
  href: string;
};

const ButtonLink: React.FC<IButtonLinkProps> = (props) => {
  const { href, children, ...rest } = props;
  return (
    <Link href={href} passHref>
      <Button {...rest}>{children}</Button>
    </Link>
  );
};

export default ButtonLink;
