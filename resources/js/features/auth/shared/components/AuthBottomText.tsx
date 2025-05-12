import { Link as _Link } from '@inertiajs/react';
import React, { ReactNode } from 'react';


interface Props {
    text: string;
    link: LinkProps;
}

const AuthBottomText = ({ text, link }: Props) => {
    return (
        <p className="text-center">
            <ContentText>{text}</ContentText>
            <Link {...link} />
        </p>
    );
};

const ContentText = ({ children }: { children?: ReactNode }) => (<span className=" text-gray-500">{children} </span>)
ContentText.displayName = "ContentText";


interface LinkProps { label: string, href: string }
const Link = ({ label, href }: LinkProps) => (
    <_Link href={href} className="text-blue-500 hover:underline">
        {label}
    </_Link>
)
Link.displayName = "Link";

export default AuthBottomText;