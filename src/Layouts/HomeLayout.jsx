import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import Navbar from "../Components/Navbar";


const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <section className="w-11/12 mx-auto">
                    <LatestNews></LatestNews>
                </section>

                <section className="w-11/12 mx-auto py-3">
                    <Navbar></Navbar>
                </section>
            </header>
            
        </div>
    );
};

export default HomeLayout;