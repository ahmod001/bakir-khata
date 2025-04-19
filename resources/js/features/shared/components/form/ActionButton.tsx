import React from 'react';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children?: React.ReactNode;
    className?: string
};

const ActionButton = ({ children, className, ...props }: Props) => {
    return (
        <button
            {...props}
            className={`max-w-xs px-6 py-2 text-white font-medium rounded-sm shadow
                        bg-gradient-to-r from-blue-500 to-pink-500 
                        hover:from-blue-600 hover:to-pink-600 
                        focus:outline-none focus:ring-1 focus:ring-blue-300 
                        transition duration-200 ease-in-out cursor-pointer w-full capitalize ${className}`}
        >
            {children}
        </button>
    );
};

export default ActionButton;
