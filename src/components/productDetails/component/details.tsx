import React from "react";
import ProductInfo from "./productInfo";
import Scroller from "./scroller";

function Details() {
  return (
    <div className="w-full grid grid-cols-3 overflow-hidden">
      <Scroller />
      <ProductInfo />
    </div>
  );
}

export default Details;
