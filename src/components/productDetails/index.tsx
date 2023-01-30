import React from "react";
import Details from "./component/details";
import Gallery from "./component/gallery";

function ProductDetails() {
  return (
    <div className="xl:container h-screen w-screen px-3 xl:px-0 lg:mx-auto grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 overflow-auto py-2 select-none scrollbar-hide">
      <Details />
      <Gallery />
    </div>
  );
}

export default ProductDetails;
