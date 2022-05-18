import React, { FunctionComponent } from "react";
import { ButtonType, ButtonSize } from "src/theme";

export interface ButtonProps {
  children: any;
  handleClick: () => void;
  size: string;
  type: string;
  classString?: string
  title?: string
}

const Button: FunctionComponent<ButtonProps> = ({
  children,
  handleClick,
  size,
  type,
  classString,
  title
}): JSX.Element => {
  const classNames = `${ButtonType[type]} ${ButtonSize[size]} ${classString}`
  return (
    <button
      type="button"
      className={classNames}
      onClick={handleClick}
      title={title}
    >
      {children}
    </button>
  );
};

export default Button;
