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
  target?: string;
  rest?: any;
};

const Button: FC<ButtonProps> = ({
  href,
  to,
  onClick,
  type = 'button',
  children,
  variant = 'primary',
  target,
  rest,
}) => {
  const className = `${classes.btn} ${classes[variant]}`;
  if (href) {
    return (
      <a href={href} target={target} className={className} {...rest}>
        {children}
      </a>
    );
  }
  if (to) {
    return (
      <Link to={to} className={className} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <button className={className} type={type} onClick={onClick} {...rest}>
      {children}
    </button>
  );
};

export default Button;
