import clsx from 'clsx';
import React, { useMemo } from 'react';

type IButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode;
  /** Button size variants */
  size?: 'sm' | 'md' | 'lg';
  /** Additional button styles */
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
      default:
        return 'py-2 px-3 text-sm';
    }
  };

  const constructButtonClasses = useMemo(() => {
    return clsx(
      'rounded-lg bg-violet-200 font-semibold text-violet-800 hover:bg-violet-300 focus:outline-none focus:ring-4 focus:ring-violet-300',
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
