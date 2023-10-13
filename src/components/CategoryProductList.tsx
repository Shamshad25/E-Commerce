import { Card, Typography } from "@material-tailwind/react";
import { BsChevronRight } from "react-icons/bs";
import { useAppDispatch, useAppSelector } from "../redux/model/hooks";
import { addCart, cartSelector, removeCart } from "../redux/feature/cartSlice";
import ProductCard from "./ProductCard";
import React from "react";

interface ComponentProps {
  categoryTitle: string;
  categoryUid: string;
}

const CategoryProductList = ({
  categoryTitle,
  categoryUid,
}: ComponentProps) => {
  const products = useAppSelector(cartSelector).products;
  const dispatch = useAppDispatch();

  const send = (e: any) => {
    dispatch(addCart(e));
  };

  const remove = (e: any) => {
    dispatch(removeCart(e.id));
  };

  const categoryProductList = products.filter(
    (product) => product.category === categoryUid
  );
  return (
    <div>
      <div id={categoryUid} className="flex gap-2 items-center">
        <Typography className="text-3xl font-bold font-serif">
          {categoryTitle}
        </Typography>
        <BsChevronRight className="font-extrabold text-2xl" />
      </div>
      <Card className="my-8 drop-shadow-md flex flex-row">
        {categoryProductList.map((product) => {
          return (
            <React.Fragment key={product.id}>
              <ProductCard
                img={product.img}
                price={product.price}
                name={product.name}
                weight={product.weight}
                handleOnChange={() => send(product)}
                id={product.id}
                handleRemove={() => remove(product)}
              />
            </React.Fragment>
          );
        })}
      </Card>
    </div>
  );
};

export default CategoryProductList;
