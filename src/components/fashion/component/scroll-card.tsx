import Image from "next/image";
import React from "react";

interface dataType {
  data: { id: number; img: string };
}

function ScrollCard({ data }: dataType) {
  return (
    <div className="h-64 w-[80%] rounded-3xl flex justify-center items-center bg-slate-100 cursor-pointer">
      <Image src={data?.img} alt="product" width={160} height={160} />
    </div>
  );
}

export default ScrollCard;
