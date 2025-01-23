import Header from "../Components/Header";
import RightNavbar from "../Components/layout-component/RightNavbar";


const NewsDetails = () => {
    return (
        <div>
            <header>
                <Header></Header>
            </header>

            <main className="w-11/12 mx-auto grid grid-cols-12 gap-5">

                <section className="col-span-9">

                </section>

                <aside className="col-span-3">
                    <RightNavbar></RightNavbar>
                </aside>

            </main>

        </div>
    );
};

export default NewsDetails;