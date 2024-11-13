import Header from "../components/Header";
import LatestNews from "../components/LatestNews";

const HomeLayout = () => {
    return (
        <div>
         
            <header>
                <Header/>
                <section className="w-11/12 max-w-screen-2xl mx-auto">
                    <LatestNews/>
                </section>
            </header>
            <nav></nav>
            <main></main>
        </div>
    );
};

export default HomeLayout;