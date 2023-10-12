import React from "react";

// import Card from "./Card";
import CategoryProductList from "./CategoryProductList";
import { categories } from "../constants";

interface ICategory {
  title: string;
  catid: string;
}

const Category = () => {
  return (
    <section className="  p-8 rounded-none shadow-md shadow-blue-gray-900/5">
      {categories.map((category: ICategory) => (
        <CategoryProductList
          categoryTitle={category.title}
          categoryUid={category.catid}
          key={category.catid}
        />
      ))}
      <div></div>
    </section>
  );
};

export default Category;
