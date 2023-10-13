import { categories } from "../constants";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Sidebar = () => {
  return (
    <div className="md:w-1/5 flex flex-col gap-2 p-2 h-[calc(100vh-5rem)] rounded-none shadow-md shadow-blue-gray-900/5  overflow-y-scroll fixed z-50 top-20 ">
      {categories.map((catagory) => (
        <div key={catagory.catid}>
          <AnchorLink
            href={`#${catagory.catid}`}
            offset={() => 140}
            className="md:w-64  flex gap-2 p-3 rounded-lg hover:bg-gray-300 focus:bg-sideblue"
          >
            <p>{catagory.title}</p>
          </AnchorLink>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
