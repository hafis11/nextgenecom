import dynamic from "next/dynamic";
import React from "react";
const FashionDetails = dynamic(() => import('@/src/components/fashion'), {
  ssr: false
})

const Index = () => {
  return <FashionDetails />;
};

export default Index;
