import React from 'react';
import CardSkeleton from './card/CardSkeleton';

type Props = React.HTMLProps<HTMLDivElement> & {
    //props goes here
}

const StatisticsCardSkeletonGroup = ({ ...props }: Props) => {
    return (
        <div {...props}>
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
        </div>
    );
};

export default StatisticsCardSkeletonGroup;