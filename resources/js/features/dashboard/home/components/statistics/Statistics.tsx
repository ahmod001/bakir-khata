import { useQuery } from '@tanstack/react-query';
import { statistics as fetchStatistics } from '../../services/api/statistics';
import StatisticCardGroup from './StatisticCardGroup';
import StatisticsCardSkeletonGroup from './StatisticsCardSkeletonGroup';



const Statistics = () => {
    const classList = "grid grid-cols-3 gap-5 mt-10"


    const { data, isPending } = useQuery({
        queryKey: ['statistics'],
        queryFn: fetchStatistics,
    });


    if (!isPending)
        return (
            <StatisticCardGroup
                className={classList}
                totalCustomers={data?.data?.total_customers}
                totalDue={data?.data?.total_due}
                totalBalance={data?.data?.total_balance} />
        );

    return (
        <StatisticsCardSkeletonGroup className={classList} />
    )
};




export default Statistics;