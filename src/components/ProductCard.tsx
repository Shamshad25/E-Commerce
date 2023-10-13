import { Typography } from "@material-tailwind/react";
import { BsFillDashCircleFill, BsFillPlusCircleFill } from "react-icons/bs";
import { useAppSelector } from "../redux/model/hooks";
import { cartSelector } from "../redux/feature/cartSlice";

interface cardProps {
  img: string;
  price: number;
  weight: string;
  name: string;
  id: number;
  handleOnChange(): void;
  handleRemove(): void;
}

const ProductCard = ({
  img,
  name,
  weight,
  price,
  id,
  handleOnChange,
  handleRemove,
}: cardProps) => {
  const cartValues = useAppSelector(cartSelector).cart;

  const isExisting = cartValues.some((value) => value.id == id);

  return (
    <div className="mt-6 w-full">
      <div className="relative">
        <img src={img} alt="card-image" className="w-30 h-30 " />
        {isExisting ? (
          <span
            className="absolute  right-8 bottom-0 cursor-pointer"
            onClick={handleRemove}
          >
            <BsFillDashCircleFill color={"#40D589"} size={30} />
          </span>
        ) : (
          <span
            className="absolute right-8 bottom-0 cursor-pointer"
            onClick={handleOnChange}
          >
            <BsFillPlusCircleFill color={"#40D589"} size={30} />
          </span>
        )}
      </div>
      <div>
        <Typography
          variant="paragraph"
          color="blue-gray"
          className="text-l font-bold "
        >
          {price}
        </Typography>
        <Typography variant="small" className="text-sm">
          {name}
        </Typography>
        <Typography variant="small" className="font-sm text-lightgray">
          {weight}
        </Typography>
      </div>
    </div>
  );
};

export default ProductCard;
