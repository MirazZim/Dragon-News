import { useLoaderData } from "react-router-dom";
import NewsCard from "../Components/NewsCard";


const CategoryNews = () => {
    const { data:news } = useLoaderData();
    console.log("Fetched Data:", news);


    return (
        <div>
            <h2 className="font-semibold mb-3 text-black">Dragon News Home</h2>
            <p className="text-sm">{news.length} News Found in this Category</p>
            
            <div className="space-y-4">
                {
                    news.map((singleNews) =>( <NewsCard  key={singleNews._id} news = {singleNews} ></NewsCard>))
                }
            </div>
        </div>
    );
};

export default CategoryNews;