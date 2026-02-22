import type { FC, ReactNode } from 'react';
import classes from './Button.module.css';
import { Link } from 'react-router-dom';

type ButtonProps = {
  href?: string;
  to?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  children?: ReactNode;
  variant: 'primary' | 'secondary';
};

const Button: FC<ButtonProps> = ({
  href,
  to,
  onClick,
  type = 'button',
  children,
  variant = 'primary',
}) => {
  const className = `${classes.btn} ${classes[variant]}`;
  if (href) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }
  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button className={className} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
