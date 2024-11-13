import { useEffect, useState } from "react";

const LeftNavber = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data?.data?.news_category));
  }, []);
  return (
    <div>
      <h2 className=" font-semibold">All Category</h2>
      <div className="mt-4 flex flex-col gap-3">
        {categories?.map((category) => (
          <button className="btn
          " key={category.category_id}>{category.category_name}</button>
        ))}
      </div>
    </div>
  );
};

export default LeftNavber;
