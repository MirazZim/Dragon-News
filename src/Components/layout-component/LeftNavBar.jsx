import { useEffect, useState } from "react";


const LeftNavBar = () => {

    const [categories, setCategories] = useState([]);

    //thats how we load the data using api
    useEffect(() => {
        fetch(" https://openapi.programming-hero.com/api/news/categories")
            .then(res => res.json())
            .then(data => setCategories(data.data.news_category))
    }, [])

    return (
        <div>
            <h2 className="font-semibold text-black mb-3">All Category ({categories.length})</h2>
            <div className="flex flex-col gap-2">
                {/* Thats how we show it in the display */}

                {
                    categories.map((category) => (<button className="btn bg-gray-200 border-none text-black" key={category.category_id} >{category.category_name}</button>))
                }
            </div>
        </div>
    );
};

export default LeftNavBar;