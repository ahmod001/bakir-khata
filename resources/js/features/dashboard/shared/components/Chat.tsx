import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface Props<T extends string> {
    title?: string;
    strokeColor?: string;
    dataKey: T;
    dataList: ({
        name: string;
    } & Record<T, number>)[];
}

export default function Chart<T extends string>({
    title,
    strokeColor = '#155dfc',
    dataKey,
    dataList,
}: Props<T>) {
    return (
        <div>
            {title && <Title>{title}</Title>}

            <div className="w-full h-80 bg-[#f9fafb] p-4 rounded-sm">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={dataList}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#d1d5dc" />
                        <XAxis dataKey="name" stroke="#4a5565" />
                        <YAxis stroke="#4a5565" />
                        <Tooltip />
                        <Line type="linear" dataKey={dataKey} stroke={strokeColor} strokeWidth={2} dot />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

const Title = ({ children }: { children?: React.ReactNode }) => (
    <h2 className="text-xl font-semibold text-gray-700 md:text-2xl mb-3">{children}</h2>
);
Title.displayName = 'Title';
