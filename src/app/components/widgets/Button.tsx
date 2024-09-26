import { MouseEventHandler } from 'react';

const BUTTON_VARIANTS = ['primary', 'secondary'] as const;

type ButtonVariants = (typeof BUTTON_VARIANTS)[number];

type ButtonProps = {
  variant: ButtonVariants;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
  onClick?: MouseEventHandler<HTMLDivElement>;
};

const Button = ({ children, rightIcon, onClick, variant }: ButtonProps) => {
  return (
    <div
      className={`flex w-fit cursor-pointer gap-2 rounded-2xl px-6 py-3 align-baseline text-xl font-semibold btn-${variant}`}
      onClick={onClick}
    >
      {children}
      {rightIcon && rightIcon}
    </div>
  );
};

export default Button;
