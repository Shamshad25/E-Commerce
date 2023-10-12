import { CardBody, Typography } from "@material-tailwind/react";
import { BsFillPlusCircleFill } from "react-icons/bs";

interface cardProps {
  img: string;
  price: number;
  weight: string;
  name: string;
  handleOnChange(): void;
}

// BsFillDashCircleFill

const ProductCard = ({
  img,
  name,
  weight,
  price,
  handleOnChange,
}: cardProps) => {
  return (
    <div className="mt-6 w-36">
      <div className="relative">
        <img src={img} alt="card-image" />
        <span
          className="absolute right-8 bottom-4 cursor-pointer"
          onClick={handleOnChange}
        >
          <BsFillPlusCircleFill
            color={"#40D589"}
            size={30}
            clasName="bg-red-300"
          />
        </span>
        {/* <BsFillDashCircleFill color={"#40D589"} /> */}
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
