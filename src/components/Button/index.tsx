
import React, {FunctionComponent} from 'react';

export interface ButtonProps {
    children: JSX.Element | JSX.Element[];
    handleClick?: React.MouseEventHandler
}

const Button: FunctionComponent<ButtonProps> = ({children, handleClick}): JSX.Element => {
    return(
        <button
            type='button'
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary p-4 font-bold text-white shadow-lg shadow-primary/50 transition-all duration-300 hover:bg-primary/50"
            onClick={handleClick}
            data-testid="main-btn"
        >
            { children }
        </button>
    )
}

export default Button;
