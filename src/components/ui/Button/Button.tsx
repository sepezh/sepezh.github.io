import type { FC, ReactNode } from "react";
import classes from "./Button.module.css";

type ButtonProps = {
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  children?: ReactNode;
  variant: "primary" | "secondary";
};

const Button: FC<ButtonProps> = ({
  href,
  onClick,
  type = "button",
  children,
  variant = "primary",
}) => {
  const className = `${classes.btn} ${classes[variant]}`;
  if (href) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return (
    <button className={className} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
