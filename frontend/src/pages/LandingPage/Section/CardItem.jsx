import React from "react";
import { Link } from "react-router-dom";
import ImageSlider from "../../../components/ImageSlider";

const CardItem = ({ product }) => {
  //   console.log(product.images);
  return (
    <div className="border-[1px] border-gray-300">
      <ImageSlider image={product.images} />
      <Link to={`/product/${product._id}`}>
        <p>{product.title}</p>
        <p>{product.continents}</p>
        <p className="p-1 text-xs text-gray-500 ">{product.price}원</p>
      </Link>
    </div>
  );
};

export default CardItem;
