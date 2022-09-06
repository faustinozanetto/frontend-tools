import React from 'react';
import clsx from 'clsx';

type IButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
};

const Button = React.forwardRef<HTMLButtonElement, IButtonProps>((props, ref) => {
  const { children, size = 'md', type = 'button', ...rest } = props;

  const getButtonSizeVariants = (): string => {
    switch (size) {
      case 'sm':
        return 'px-2.5 py-2';
      case 'md':
        return 'px-4 py-3.5';
      case 'lg':
        return 'px-6 py-4';
    }
    return '';
  };

  const buttonVariants = clsx(
    'w-full h-full relative transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400',
    getButtonSizeVariants()
  );
  return (
    <button
      ref={ref}
      type={type}
      className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md"
      {...rest}
    >
      <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
      <span className={buttonVariants}>
        <span className="relative text-white">{children}</span>
      </span>
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
