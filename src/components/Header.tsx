import { Navbar, Typography, Button } from "@material-tailwind/react";
import frame from "../assets/Frame.svg";
import { BsCart } from "react-icons/bs";

// AiOutlineShoppingCart
// BsCart
export function Header() {
  return (
    <Navbar className="min-w-full h-20 px-4 rounded-none bg-yellow border-none fixed z-50">
      <div className="container mx-auto flex items-center justify-between text-darkBlue">
        <div>
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-extrabold text-2xl font-serif"
          >
            E-Commerce
          </Typography>
        </div>
        <div className="flex gap-6">
          <Button className="rounded-full flex gap-2" color="white">
            <img src={frame} alt="frame" />
            <Typography className="text-sm font-bold">Share Logs</Typography>
          </Button>

          <div className="bg-white flex items-center px-5 rounded-full gap-2">
            <BsCart size={20} /> <span className="font-sm font-bold">4</span>
          </div>
        </div>
      </div>
    </Navbar>
  );
}
