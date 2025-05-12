import React from 'react';
import SideMenu from '../components/SideMenu';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main>
            <SideMenu />
            {children}
        </main>
    );
};

export default MainLayout;