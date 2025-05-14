import MainLayout from "../shared/layouts/MainLayout";
import Header from "./components/header/Header";
import Statistics from "./components/statistics/Statistics";

const Home = () => {
    return (
        <MainLayout>
            <section >
                <Header />
                <Statistics />
            </section>
        </MainLayout>
    );
};

export default Home;