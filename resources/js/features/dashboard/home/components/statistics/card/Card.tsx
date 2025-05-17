interface CardProps {
    color?: string;
    children?: React.ReactNode;
}

const Card = ({ color = '#6a7282', children }: CardProps) => {
    const customStyle = {
        backgroundColor: color
    }
    return (
        <div className="px-6 py-7 rounded-md shadow text-white w-full"
            style={customStyle}>
            {children}
        </div>
    );
};


const Title = ({ children }: { children?: React.ReactNode }) => (
    <p className="font-semibold text-xl xl:text-xl mb-0.5">{children}</p>
)
Title.displayName = 'Title';


const Content = ({ children }: { children?: React.ReactNode }) => (
    <h1 className="text-3xl xl:text-5xl font-bold">{children}</h1>
)
Content.displayName = 'Content';




Card.Title = Title;
Card.Content = Content;


export default Card;