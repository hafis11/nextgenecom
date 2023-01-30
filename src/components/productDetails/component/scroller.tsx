import React from "react";
import ScrollCard from "./scroll-card";

function Scroller() {
  return (
    <div className="py-8 grid grid-flow-row auto-rows-max gap-6">
      {SHOES.map((item, index) => (
        <ScrollCard key={index} data={item} />
      ))}
    </div>
  );
}

export default Scroller;

const SHOES = [
  {
    id: 1,
    img: "/assets/products/shoe1.png",
  },
  {
    id: 2,
    img: "/assets/products/shoe2.png",
  },
  {
    id: 3,
    img: "/assets/products/shoe3.png",
  },
];
