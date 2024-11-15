import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftNavber = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res?.json())
      .then((data) => setCategories(data?.data?.news_category));
  }, []);
  return (
    <div>
      <h2 className=" font-semibold">All Category</h2>
      <div className="mt-4 flex flex-col gap-3 *:bg-base-100">
        {categories?.map((category) => (
          <NavLink to={`/category/${category?.category_id}`} className="btn
          " key={category?.category_id}>{category?.category_name}</NavLink>
        ))}
      </div>
    </div>
  );
};

export default LeftNavber;
