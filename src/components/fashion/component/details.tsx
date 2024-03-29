import React from "react";
import ProductInfo from "./productInfo";
import Scroller from "./scroller";

function Details() {
  return (
    <div className="w-full hidden md:grid grid-cols-3 order-last md:order-first">
      <Scroller />
      <ProductInfo />
    </div>
  );
}

export default Details;
