import Card from '../../shared/components/Card';

const Statistics = () => {
    return (
        <div className="grid grid-cols-3 gap-5 mx-5 mt-10 text-blue-600">

            {/* মোট কাস্টমার্স */}
            <Card color={' #155dfc'} >
                <Card.Title>মোট কাস্টমার্স</Card.Title>
                <Card.Content>
                    0.00
                </Card.Content>
            </Card>


            {/* মোট বাকী */}
            <Card color={' oklch(0.577 0.245 27.325)'} >
                <Card.Title>মোট বাকী</Card.Title>
                <Card.Content>
                    0.00
                </Card.Content>
            </Card>

            {/* মোট ব্যালেন্স*/}
            <Card color={'oklch(0.627 0.194 149.214)'} >
                <Card.Title>মোট ব্যালেন্স</Card.Title>
                <Card.Content>
                    0.00
                </Card.Content>
            </Card>
        </div>
    );
};

export default Statistics;