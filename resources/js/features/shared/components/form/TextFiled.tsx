import React, { useId } from 'react';

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
    label?: string,
    id?: string,
    error?: any
}

const TextFiled = ({ label, error, id, ...props }: Props) => {

    const generatedId = `${label}-input-${useId()}`;
    const ID = id || generatedId;

    return (
        <div className="relative max-w-xs w-full">
            <Filed id={ID} placeholder=" " {...props} isError={!!error} />
            <Label htmlFor={ID}>{label}</Label>

            {error && <Error>{error}</Error>}
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

const Filed = ({ isError, ...props }: { isError?: boolean } & React.InputHTMLAttributes<HTMLInputElement>) => {
    const borderClass = isError ? "border-red-600" : "border-gray-300";

    return (
        <input
            {...props}
            placeholder=" "
            className={`peer w-full border-b-2 ${borderClass} border-gray-300 bg-transparent px-1 pt-6 pb-1 text-sm text-gray-900 placeholder-transparent transition-all duration-200 focus:border-blue-600 focus:outline-none`}
        />
    )
};
Filed.displayName = "Filed";

const Error = ({ children }: { children?: React.ReactNode }) => (
    <small className='text-red-600 text-sm'>
        {children}
    </small>
)
Error.displayName = "Error"

export default TextFiled;
