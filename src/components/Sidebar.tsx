import { List, ListItem } from "@material-tailwind/react";
import { categories } from "../constants";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Sidebar = () => {
  return (
    <>
      <div className="h-[calc(100vh-5rem)] p-4 rounded-none shadow-md shadow-blue-gray-900/5  overflow-y-scroll fixed z-50 top-20">
        <List>
          {categories.map((catagory) => (
            <ListItem
              className="hover:bg-sideblue focus:bg-sideblue"
              key={catagory.catid}
            >
              <AnchorLink href={`#${catagory.catid}`} offset={() => 140}>
                {catagory.title}
              </AnchorLink>
            </ListItem>
          ))}
        </List>
      </div>
    </>
  );
};

export default Sidebar;
