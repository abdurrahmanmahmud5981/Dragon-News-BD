import { useLoaderData } from "react-router-dom";
import NewsCard from "../components/layout-component/NewsCard";

const CategoryNews = () => {
    const {data:news} = useLoaderData()
    return (
        <div>
           <h2 className="font-semibold mb-3">Dragon News Home</h2>
           <div className="">
            {
                news?.map(singleNews => <NewsCard key={singleNews?._id} news={singleNews}/> )
            }
           </div>
        </div>
    );
};

export default CategoryNews;