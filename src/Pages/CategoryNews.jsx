import { useLoaderData } from "react-router-dom";


const CategoryNews = () => {
    const { data } = useLoaderData();
    console.log("Fetched Data:", data);


    return (
        <div>
            <h2>News Found In this category :{data.length}</h2>
            

        </div>
    );
};

export default CategoryNews;