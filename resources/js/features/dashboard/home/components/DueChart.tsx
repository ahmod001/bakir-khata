import Chart from '../../shared/components/Chat';

const data = [
    { name: 'Jan', due: 100 },
    { name: 'Feb', due: 3500 },
    { name: 'Mar', due: 5000 },
    { name: 'Apr', due: 4000 },
    { name: 'May', due: 6000 },
    { name: 'Jun', due: 6500 },
    { name: 'Jul', due: 7200 },
    { name: 'Aug', due: 8500 },
    { name: 'Sep', due: 7500 },
    { name: 'Oct', due: 9000 },
    { name: 'Nov', due: 9800 },
    { name: 'Dec', due: 7100 },
];

const DueChart = () => {
    return (
        <Chart title="বাকির অবস্থা" dataList={data} dataKey="due" strokeColor='oklch(0.577 0.245 27.325)' />
    );
};

export default DueChart;