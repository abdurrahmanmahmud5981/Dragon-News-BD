import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LeftNavber from "../components/layout-component/LeftNavber";
import RightNavber from "../components/layout-component/RightNavber";
import Navber from "../components/Navber";

const HomeLayout = () => {
  return (
    <div className="font-poppins">
      <header>
        <Header />
        <section className="w-11/12 max-w-screen-2xl mx-auto">
          <LatestNews />
        </section>
      </header>
      <nav className="w-11/12 max-w-screen-2xl mx-auto py-2">
        <Navber />
      </nav>
      <main className="w-11/12 max-w-screen-2xl mx-auto py-2 pt-5 grid md:grid-cols-12">
      <aside className=" col-span-3">
        <LeftNavber/>
      </aside>
      <section className=" col-span-6">main</section>
      <aside className=" col-span-3">
        <RightNavber/>
      </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
