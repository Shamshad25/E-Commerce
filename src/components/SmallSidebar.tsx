import AnchorLink from "react-anchor-link-smooth-scroll";
import frozen from "../assets/frozen.svg";
import bakery from "../assets/bakery.svg";
import diary from "../assets/diary.svg";
import produce from "../assets/produce.svg";
import canned from "../assets/canned.svg";
import sweets from "../assets/sweets.svg";

const SmallSidebar = () => {
  return (
    <main className=" w-full flex gap-2 justify-evenly pt-2 pb-2 border-b-2 border-gray-300 ">
      <div className="bg-brightgray rounded-md border-2 border-gray-400 drop-shadow-lg">
        <AnchorLink
          href="#produce"
          className="flex justify-center items-center flex-col hover:bg-gray-300 focus:bg-sideblue"
        >
          <img src={produce} alt="produce" className="w-12 h-12" />
          <p className="text-base font-bold">Produce</p>
        </AnchorLink>
      </div>
      <div className="bg-brightgray rounded-md border-2 border-gray-400 drop-shadow-lg">
        <AnchorLink
          href="#prepared-foods"
          className="flex justify-center items-center flex-col hover:bg-gray-300 focus:bg-sideblue"
        >
          <img src={sweets} alt="produxe" className="w-12 h-12 z-30" />
          <span>Sweets</span>
        </AnchorLink>
      </div>
      <div className="bg-brightgray rounded-md border-2 border-gray-400 drop-shadow-lg">
        <AnchorLink
          href="#bakery"
          className="flex justify-center items-center flex-col hover:bg-gray-300 focus:bg-sideblue"
        >
          <img src={bakery} alt="produxe" className="w-12 h-12" />
          <span>Bakery</span>
        </AnchorLink>
      </div>
      <div className="bg-brightgray rounded-md border-2 border-gray-400 drop-shadow-lg">
        <AnchorLink
          href="#canned-foods-soups"
          className="flex justify-center items-center flex-col hover:bg-gray-300 focus:bg-sideblue"
        >
          <img src={canned} alt="produxe" className="w-12 h-12" />
          <span>Canned</span>
        </AnchorLink>
      </div>
      <div className="bg-brightgray rounded-md border-2 border-gray-400 drop-shadow-lg">
        <AnchorLink
          href="#diary-eggs"
          className="flex justify-center items-center flex-col hover:bg-gray-300 focus:bg-sideblue"
        >
          <img src={diary} alt="produxe" className="w-12 h-12" />
          <span>Diary</span>
        </AnchorLink>
      </div>
      <div className="bg-brightgray  rounded-md border-2 border-gray-400 drop-shadow-lg">
        <AnchorLink
          href="#frozen"
          className="flex justify-center items-center flex-col hover:bg-gray-300 focus:bg-sideblue"
        >
          <img src={frozen} alt="produxe" className="w-12 h-12" />
          <span>Frozen</span>
        </AnchorLink>
      </div>
    </main>
  );
};

export default SmallSidebar;
