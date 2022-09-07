import React, { useMemo } from 'react';
import clsx from 'clsx';

type IButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  style?: React.CSSProperties;
};

const Button = React.forwardRef<HTMLButtonElement, IButtonProps>((props, ref) => {
  const { children, style, size = 'md', type = 'button', ...rest } = props;

  const getButtonSizeVariants = (): string => {
    switch (size) {
      case 'sm':
        return 'py-2 px-3 text-sm';
      case 'md':
        return 'px-5 py-2.5 text-base';
      case 'lg':
        return 'px-6 py-3.5 text-lg';
    }
  };

  const constructButtonClasses = useMemo(() => {
    return clsx(
      'focus:outline-none text-violet-800 bg-violet-200 hover:bg-violet-300 focus:ring-4 focus:ring-violet-300 font-semibold rounded-lg',
      getButtonSizeVariants()
    );
  }, []);

  return (
    <button ref={ref} type={type} className={constructButtonClasses} style={style} {...rest}>
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
