import React, { useId } from 'react';

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
    label?: string,
    id?: string,
}

const TextFiled = ({ label, id, ...props }: Props) => {

    const generatedId = `${label}-input-${useId()}`;
    const ID = id || generatedId;

    return (
            <div className="relative max-w-xs w-full">
                <Filed id={ID} placeholder=" " {...props} />
                <Label htmlFor={ID}>{label}</Label>
            </div>
    );
};

const Label = ({ children, htmlFor }: { children?: React.ReactNode, htmlFor: string }) => (
    <label
        htmlFor={htmlFor}
        className="absolute left-1 top-1.5 text-sm text-gray-500 transition-all duration-200 
                   peer-placeholder-shown:top-5 peer-placeholder-shown:text-base 
                   peer-placeholder-shown:text-gray-400 
                   peer-focus:top-1.5 peer-focus:text-sm peer-focus:text-blue-600"
    >
        {children}
    </label>
);

Label.displayName = "Label";

const Filed = ({ ...props }: React.InputHTMLAttributes<HTMLInputElement>) => (
    <input
        {...props}
        placeholder=" "
        className="peer w-full border-b-2 border-gray-300 bg-transparent px-1 pt-6 pb-1 text-sm text-gray-900 placeholder-transparent transition-all duration-200 focus:border-blue-600 focus:outline-none"
    />
);

Filed.displayName = "Filed";

export default TextFiled;
