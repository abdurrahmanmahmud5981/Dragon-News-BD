import { Link, useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import RightNavber from "../components/layout-component/RightNavber";

const NewsDetails = () => {
  const { data } = useLoaderData();
  const news = data[0];
  return (
    <div>
      <header>
        <Header />
      </header>
      <main className="w-11/12 mx-auto grid grid-cols-12 gap-5 max-w-screen-2xl">
        <section className="col-span-9">
          <h2 className="font-semibold mb-3">Dragon News </h2>
          <div className="card bg-base-100 shadow-lg">
            <figure className="px-10 pt-10">
              <img
                src={news?.image_url}
                alt={news?.title}
                className="rounded-xl"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{ news?.title}</h2>
              <p>{news?.details}</p>
              <div className="card-actions">
                <Link to={`/category/${news?.category_id}`} className="btn btn-primary">Back to Category</Link>
              </div>
            </div>
          </div>
        </section>
        <aside className="col-span-3">
          <RightNavber />
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
