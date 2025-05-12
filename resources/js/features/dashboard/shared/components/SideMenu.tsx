import { Link } from '@inertiajs/react';
import { ReactNode } from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';


interface Link {
    id: number;
    name: string;
    path: string;
}
const links: Link[] = [
    { id: 0, name: 'হোম', path: '/' },
    { id: 1, name: 'কাস্টমার্স', path: '/customers' },
    { id: 2, name: 'ক্যালেন্ডার', path: '/calendar' },
    { id: 3, name: 'ক্যালকুলেটর', path: '/calculator' },
    { id: 4, name: 'সেটিংস', path: '/settings' },
]


const SideMenu = () => {
    return (
        <Sidebar className='h-screen  bg-gradient-to-r from-blue-500 to-pink-500' >
            <Title>বাকির খাতা</Title>

            <Menu >
                {links.map(link => {
                    const href = 'dashboard' + link.path;

                    return (
                        <MenuItem key={link.id} component={<Link href={href} />}>
                            {link.name}
                        </MenuItem>
                    )
                })}

                {/* 
                <SubMenu label="">
                <SubMenu label="">
                    <MenuItem> Pie charts </MenuItem>
                    <MenuItem> Line charts </MenuItem>
                </SubMenu> */}
            </Menu>
        </Sidebar>
    );
};


const Title = ({ children }: { children: ReactNode }) => (
    <h1 className='text-blue-400 text-2xl font-bold text-center p-5'>{children}</h1>
)
Title.displayName = 'Title';

export default SideMenu;