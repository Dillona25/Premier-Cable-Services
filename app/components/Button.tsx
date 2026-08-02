import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'text';

type ButtonBaseProps = {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
};

type ButtonAsButton = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsAnchor = ButtonBaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsAnchor;

export default function Button({
  children,
  className = '',
  variant = 'primary',
  ...props
}: ButtonProps) {
  const classes = [
    'btn',
    'btn-sm',
    'pcs-button',
    `pcs-button--${variant}`,
    'd-inline-flex',
    'align-items-center',
    'justify-content-center',
    'gap-2',
    'fw-bold',
    'lh-1',
    'text-decoration-none',
    'text-nowrap',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if ('href' in props && props.href) {
    return (
      <a className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
