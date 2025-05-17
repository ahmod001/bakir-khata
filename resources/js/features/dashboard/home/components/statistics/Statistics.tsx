import { useQuery } from '@tanstack/react-query';
import Card from '../../shared/components/Card';
import { statistics as fetchStatistics } from '../../services/api/statistics';



const Statistics = () => {

    const { data } = useQuery({
        queryKey: ['statistics'],
        queryFn: fetchStatistics,
    });

    return (
        <div className="grid grid-cols-3 gap-5 mx-5 mt-10 text-blue-600">

            {/* মোট কাস্টমার্স */}
            <Card color={' #155dfc'} >
                <Card.Title>মোট কাস্টমার্স</Card.Title>
                <Card.Content>
                    {data?.data?.total_customers ?? '00'}
                </Card.Content>
            </Card>


            {/* মোট বাকী */}
            <Card color={' oklch(0.577 0.245 27.325)'} >
                <Card.Title>মোট বাকী</Card.Title>
                <Card.Content>
                    {data?.data?.total_due ?? '0.00'}<Currency />
                </Card.Content>
            </Card>

            {/* মোট ব্যালেন্স*/}
            <Card color={'oklch(0.627 0.194 149.214)'} >
                <Card.Title>মোট ব্যালেন্স</Card.Title>
                <Card.Content>
                    {data?.data?.total_balance ?? '0.00'}<Currency />
                </Card.Content>
            </Card>
        </div>
    );
};


const Currency = () => (
    <small className='text-xl relative bottom-0.5 left-0.5'>Tk</small>
)


export default Statistics;