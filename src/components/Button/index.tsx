import { FC, MouseEvent, ReactNode } from "react";
import "./style.css";

interface IButtonProps {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}

const Button: FC<IButtonProps> = ({
  children,
  className,
  disabled,
  onClick,
}) => {
  return (
    <button
      className={`btn ${className ?? ""}`}
      disabled={disabled ?? false}
      onClick={(e: MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        onClick?.();
      }}
    >
      {children}
    </button>
  );
};

export default Button;
