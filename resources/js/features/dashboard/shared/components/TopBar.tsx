import React from "react";

const TopBar = ({ children }: { children?: React.ReactNode }) => {
    return (
        <header className="p-3 bg-gray-50 border border-gray-300">
            {children}
        </header>
    );
};

export default TopBar;