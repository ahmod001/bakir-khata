import MainLayout from "../shared/layouts/MainLayout";
import DueChart from "./components/DueChart";
import Header from "./components/header/Header";
import Statistics from "./components/statistics/Statistics";




const Home = () => {
    return (
        <MainLayout>
            <section >
                <Header />
                <div className=" mx-5 space-y-7">
                    <Statistics />
                    <DueChart />
                </div>
            </section>
        </MainLayout>
    );
};

export default Home;