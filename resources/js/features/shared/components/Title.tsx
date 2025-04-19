import React from 'react';

const Title = ({ children,className }: { children?: React.ReactNode, className?:string }) => {
    return (
        <h1 className={className+" text-2xl font-semibold text-center text-gray-800 capitalize"}>{children}</h1>
    );
};

export default Title;