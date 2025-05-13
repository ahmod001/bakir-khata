import React from 'react';
import SideMenu from '../components/SideMenu';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className='flex'>
            <SideMenu />
            <main className='w-full'>
                {children}
            </main>
        </main>
    );
};

export default MainLayout;