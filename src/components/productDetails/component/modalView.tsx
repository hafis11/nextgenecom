import { GetActiveBody } from "@/src/redux/modal/selectors";
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import ShoeModel from "./Shoe";
// import { useMediaQuery } from "react-responsive";

function ModalView() {
  const value = useSelector(GetActiveBody);
  // const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <div className="h-full relative">
      <div className="flex items-center px-5 absolute w-full top-0 py-6 z-30">
        <div className="grid grid-cols-2">
          <div className="border w-8 h-8 rounded-full"></div>
          <div className="bg-white w-8 h-8 rounded-full mx-1 flex justify-center items-center">
            <h2 className="text-xs">{value}</h2>
          </div>
        </div>
      </div>
      <div className="h-full z-20">
        <Canvas shadows camera={{ position: [20, 20, -10], fov: 15 }}>
          <color attach="background" args={["#000"]} />
          <ambientLight intensity={0.3} />
          <spotLight
            intensity={0.3}
            angle={0.1}
            penumbra={1}
            position={[5, 25, 20]}
          />
          <Suspense fallback={null}>
            <ShoeModel />
            <Environment files="/assets/shoeModal/royal_esplanade_1k.hdr" />
            <ContactShadows
              rotation-x={Math.PI / 2}
              position={[0, -0.8, 0]}
              opacity={0.25}
              width={10}
              height={10}
              blur={2}
              far={1}
            />
          </Suspense>
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            enableRotate={true}
          />
        </Canvas>
      </div>
      <div className="w-full absolute bottom-0 py-10 flex justify-center items-center">
        <h5 className="text-md text-white">Nike Air Force 1</h5>
      </div>
    </div>
  );
}

export default ModalView;
