import React from "react";
import ScrollCard from "./scroll-card";

function Scroller() {
  return (
    <div className="py-8 lg:grid grid-flow-row auto-rows-max gap-6 hidden">
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
    img: "/assets/products/Lipstick.png",
  },
  {
    id: 2,
    img: "/assets/products/dress.png",
  },
  {
    id: 3,
    img: "/assets/products/watch.png",
  },
];
