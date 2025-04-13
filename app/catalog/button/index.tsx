'use client';

import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const buttonVariances = cva(
  'py-2 px-4 min-w-[5rem] rounded-xl transition-all duration-200 cursor-pointer',
  {
    variants: {
      variant: {
        solid: 'bg-primary text-white border-transparent hover:bg-primary-600',
        faded:
          'bg-gray-700 text-gray-300 hover:bg-gray-900 border-2 border-gray-700',
        bordered: 'bg-transparent text-primary-500 border-2 border-primary-500',
        light:
          'text-gray-800 border-transparent hover:bg-primary-500/20 hover:bg-primary/20 hover:text-primary',
        flat: 'bg-primary/20 text-primary border-transparent',
        ghost:
          'bg-transparent text-primary-500 border-2 border-primary-500 hover:bg-primary-500 hover:text-white',
        shadow:
          'bg-primary text-white border-transparent shadow-primary shadow-md hover:shadow-lg hover:bg-primary/80',
      },
      color: {
        primary: 'text-primary',
        secondary: 'text-gray-500',
        danger: 'text-red-500',
        success: 'text-green-500',
        warning: 'text-yellow-500',
      },
      size: {
        small: 'text-sm py-1 px-2',
        medium: 'text-base py-2 px-4',
        large: 'text-lg py-3 px-6',
      },

      disabled: {
        false: null,
        true: 'opacity-40 cursor-not-allowed pointer-events-none text-muted',
      },
    },
    compoundVariants: [
      {
        variant: 'solid',
        disabled: false,
        className: 'text-white',
      },
      {
        variant: 'shadow',
        disabled: false,
        className: 'text-white',
      },
    ],
    defaultVariants: {
      variant: 'solid',
      size: 'medium',
      disabled: false,
    },
  }
);

interface ButtonProps extends React.ComponentProps<'button'> {
  variant?:
    | 'solid'
    | 'faded'
    | 'bordered'
    | 'light'
    | 'flat'
    | 'ghost'
    | 'shadow';
  color?: 'primary' | 'secondary' | 'danger' | 'success' | 'warning';
  size?: 'small' | 'medium' | 'large';
}

const Button = ({
  variant = 'solid',
  color = 'primary',
  size = 'medium',
  disabled = false,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={twMerge(
        buttonVariances({
          variant,
          color,
          size,
          className,
          disabled,
        })
      )}
    />
  );
};

export default Button;
