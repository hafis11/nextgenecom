import { GetActiveBody } from "@/src/redux/modal/selectors";
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import ShoeModel from "./Shoe";

function ModalView() {
  const value = useSelector(GetActiveBody);
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
          <Suspense fallback={null}>
            <color attach="background" args={["#000"]} />
            <ambientLight intensity={0.5} />
            <pointLight position={[-10, -10, -10]} />
            <spotLight
              position={[10, 10, 10]}
              angle={0.4}
              penumbra={1}
              intensity={1}
              castShadow
              shadow-mapSize-width={2048}
              shadow-mapSize-height={2048}
              shadow-bias={-0.0001}
            />
            <ShoeModel />
            <OrbitControls
              enablePan={true}
              enableZoom={false}
              enableRotate={true}
            />
            <Environment preset="city" />
          </Suspense>
        </Canvas>
      </div>
      <div className="w-full absolute bottom-0 py-10 flex justify-center items-center">
        <h5 className="text-md text-white">Nike Air Force 1</h5>
      </div>
    </div>
  );
}

export default ModalView;
