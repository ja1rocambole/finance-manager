import React from "react";

interface IButton {
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
  type: "submit" | "reset" | "button";
}

export const Button = ({ className, onClick, children, type }: IButton) => {
  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
    </button>
  );
};
