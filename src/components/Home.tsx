import Category from "./Category";
import { Header } from "./Header";
import Sidebar from "./Sidebar";
import SmallSidebar from "./SmallSidebar";

const Home = () => {
  return (
    <main className="w-full flex h-screen relative">
      <Header />
      <section className="w-full flex-col md:flex-row flex pt-20 ">
        <div className=" sm:w-1/5 hidden md:block">
          <Sidebar />
        </div>
        <div className="w-full block md:hidden">
          <SmallSidebar />
        </div>
        <div className="w-full md:w-4/5 ">
          <Category />
        </div>
      </section>
    </main>
  );
};

export default Home;
