import Chart from "../shared/components/Chat";
import MainLayout from "../shared/layouts/MainLayout";
import Header from "./components/header/Header";
import Statistics from "./components/statistics/Statistics";
const data = [
    { name: 'Jan', orders: 100 },
    { name: 'Feb', orders: 3500 },
    { name: 'Mar', orders: 5000 },
    { name: 'Apr', orders: 4000 },
    { name: 'May', orders: 6000 },
    { name: 'Jun', orders: 6500 },
    { name: 'Jul', orders: 7200 },
    { name: 'Aug', orders: 8500 },
    { name: 'Sep', orders: 7500 },
    { name: 'Oct', orders: 9000 },
    { name: 'Nov', orders: 9800 },
    { name: 'Dec', orders: 7100 },
];
const Home = () => {
    return (
        <MainLayout>
            <section >
                <Header />
                <div className=" mx-5">
                    <Statistics />
                    <Chart title="Revenue" dataList={data} dataKey="orders" />
                </div>
            </section>
        </MainLayout>
    );
};

export default Home;