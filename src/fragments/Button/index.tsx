import React from "react";

interface IButton {
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

export const Button = ({ className, onClick, children }: IButton) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};
