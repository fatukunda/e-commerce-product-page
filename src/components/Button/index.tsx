import React, { FunctionComponent } from "react";
import { ButtonType, ButtonSize } from "src/theme";

export interface ButtonProps {
  children: JSX.Element | JSX.Element[];
  handleClick: () => void;
  size: string;
  type: string;
}

const Button: FunctionComponent<ButtonProps> = ({
  children,
  handleClick,
  size,
  type,
}): JSX.Element => {
  const classNames = `${ButtonType[type]} ${ButtonSize[size]}`
  return (
    <button
      type="button"
      className={classNames}
      onClick={handleClick}
      data-testid="main-btn"
    >
      {children}
    </button>
  );
};

export default Button;
