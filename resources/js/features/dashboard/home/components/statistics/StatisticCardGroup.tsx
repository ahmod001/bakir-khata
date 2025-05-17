import React from 'react';
import Card from './card/Card';
import Currency from './Currency';


interface Props extends React.HTMLProps<HTMLDivElement> {
    totalCustomers: string | number,
    totalDue: string | number,
    totalBalance: string | number
}

const StatisticCardGroup = ({ totalCustomers, totalDue, totalBalance, ...props }: Props) => {
    return (
        <div {...props}>

            {/* মোট কাস্টমার্স */}
            <Card color={' #155dfc'} >
                <Card.Title>মোট কাস্টমার্স</Card.Title>
                <Card.Content>
                    {totalCustomers}
                </Card.Content>
            </Card>


            {/* মোট বাকী */}
            <Card color={' oklch(0.577 0.245 27.325)'} >
                <Card.Title>মোট বাকী</Card.Title>
                <Card.Content>
                    {totalDue}<Currency />
                </Card.Content>
            </Card>

            {/* মোট ব্যালেন্স*/}
            <Card color={'oklch(0.627 0.194 149.214)'} >
                <Card.Title>মোট ব্যালেন্স</Card.Title>
                <Card.Content>
                    {totalBalance}<Currency />
                </Card.Content>
            </Card>
        </div>
    );
};

export default StatisticCardGroup;