import React, { useEffect, useState } from "react";
import { Navbar, Typography, Button } from "@material-tailwind/react";
import Menu from "@mui/material/Menu";
import frame from "../assets/Frame.svg";
import { useAppSelector } from "../redux/model/hooks";
import { cartSelector } from "../redux/feature/cartSlice";
import { BsCart, BsXLg } from "react-icons/bs";

export function Header() {
  const [price, setPrice] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: any): void => {
    setAnchorEl(event.currentTarget);
  };

  const cartValues = useAppSelector(cartSelector).cart;
  // const dispatch = useAppDispatch();


  const handleClose = () => {
    setAnchorEl(null);
  };

  const total = () => {
    let price: number = 0;
    cartValues.map((ele) => {
      price += ele.price;
    });
    setPrice(price);
  };

  useEffect(() => {
    total();
  }, [total]);

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
          <Button
            onClick={handleClick}
            className=" bg-white flex items-center px-5 rounded-full gap-2 relative"
          >
            <BsCart size={20} color={"black"} />
            <Typography className="font-xl font-bold text-black">
              {cartValues.length}
            </Typography>
          </Button>

          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            {cartValues.length ? (
              <div
                style={{
                  width: "24rem",
                  padding: "10px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <button
                  onClick={handleClose}
                  className="pb-1 pr-4 flex justify-end"
                >
                  <BsXLg color={"red"} />
                </button>
                <div className=" w-full flex justify-center border-b-2 border-gray-400">
                  <Typography variant="paragraph">Cart Items</Typography>
                </div>
                <div className=" w-full flex flex-col gap-2 pt-2 border-b-2 border-gray-400">
                  {cartValues &&
                    cartValues.map((ele) => {
                      return (
                        <div
                          className="flex flex-row justify-around border-b-2 border-gray-200"
                          key={ele.id}
                        >
                          <div>
                            <Typography variant="small" className="font-bold">
                              {ele.name}
                            </Typography>
                            <Typography variant="small">
                              {ele.weight}
                            </Typography>
                            <Typography variant="small" className="font-bold">
                              Price: {ele.price}
                            </Typography>
                          </div>
                          <div>
                            <img
                              src={ele.img}
                              alt={ele.name}
                              style={{ width: "5rem", height: "5rem" }}
                            />
                          </div>
                        </div>
                      );
                    })}
                </div>
                <Typography variant="small" className="font-bold pl-4">
                  Total: ${price}
                </Typography>
              </div>
            ) : (
              <div className="relative flex flex-col justify-center items-end p-2">
                <button onClick={handleClose} className="pb-1">
                  <BsXLg color={"red"} />
                </button>
                <Typography>Your cart is empty!</Typography>
              </div>
            )}
          </Menu>
        </div>
      </div>
    </Navbar>
  );
}
