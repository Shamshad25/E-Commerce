import Category from "./Category";
import { Header } from "./Header";
import Sidebar from "./Sidebar";

const Home = () => {
  return (
    <main className="w-full h-screen relative">
      <Header />
      <section className="flex pt-20">
        <div className="w-1/5">
          <Sidebar />
        </div>
        <div className="w-4/5">
          <Category />
        </div>
      </section>
    </main>
  );
};

export default Home;
