import { FC, MouseEvent, ReactNode } from "react";
import "./style.css";

interface IButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

const Button: FC<IButtonProps> = ({ children, className, onClick }) => {
  return (
    <button
      onClick={(e: MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        onClick?.();
      }}
      className={`btn ${className ?? ""}`}
    >
      {children}
    </button>
  );
};

export default Button;
