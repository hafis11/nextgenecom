import React, { useEffect } from "react";
import ProductInfo from "./productInfo";
import Scroller from "./scroller";

function Details() {
  return (
    <div className="w-full grid grid-cols-3 order-last md:order-first">
      <Scroller />
      <ProductInfo />
    </div>
  );
}

export default Details;
