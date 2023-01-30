import React from "react";
import Details from "./component/details";
import Gallery from "./component/gallery";

function ProductDetails() {
  return (
    <div className="container h-screen w-screen mx-auto grid grid-cols-2 overflow-hidden py-2 select-none">
      <Details />
      <Gallery />
    </div>
  );
}

export default ProductDetails;
