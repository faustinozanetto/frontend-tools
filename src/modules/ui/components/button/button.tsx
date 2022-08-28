import React, { ButtonHTMLAttributes } from 'react';

type IButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode;
};

const Button = React.forwardRef<HTMLButtonElement, IButtonProps>((props, ref) => {
  const { children, type = 'button', ...rest } = props;

  return (
    <button
      ref={ref}
      type={type}
      className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md"
      {...rest}
    >
      <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
      <span className="w-full h-full relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
        <span className="relative text-white">{children}</span>
      </span>
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
