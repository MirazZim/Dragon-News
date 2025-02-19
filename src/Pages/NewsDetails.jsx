import { Link, useLoaderData } from "react-router-dom";
import Header from "../Components/Header";
import RightNavbar from "../Components/layout-component/RightNavbar";


const NewsDetails = () => {
    const data = useLoaderData()
    const news = data.data[0];
    console.log(news)

    return (
        <div>
            <header>
                <Header></Header>
            </header>

            <main className="w-11/12 mx-auto grid grid-cols-12 gap-5">

                <section className="col-span-9">
                    <h2 className="font-semibold mb-4 text-black">Dragon News</h2>


                    <div className="card bg-white shadow-2xl text-black ">
                        <figure className="px-10 pt-10">
                            <img
                                src= {news?.image_url}
                                alt="Shoes"
                                className="rounded-xl" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{news?.title}</h2>
                            <p>{news?.details}</p>
                            <div className="card-actions">
                                <Link to = "/" className="btn btn-primary">Back To Category</Link>
                            </div>
                        </div>
                    </div>


                </section>

                <aside className="col-span-3">
                    <RightNavbar></RightNavbar>
                </aside>

            </main>

        </div>
    );
};

export default NewsDetails;