import { CardBody, Typography } from "@material-tailwind/react";
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
    <div className="mt-6 w-36">
      <div className="relative">
        <img src={img} alt="card-image" />
        {isExisting ? (
          <span
            className="absolute right-8 bottom-4 cursor-pointer"
            onClick={handleRemove}
          >
            <BsFillDashCircleFill color={"#40D589"} size={30} />
          </span>
        ) : (
          <span
            className="absolute right-8 bottom-4 cursor-pointer"
            onClick={handleOnChange}
          >
            <BsFillPlusCircleFill color={"#40D589"} size={30} />
          </span>
        )}
      </div>
      <CardBody>
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
      </CardBody>
    </div>
  );
};

export default ProductCard;
