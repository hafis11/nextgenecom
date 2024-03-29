/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 shoe.gltf
*/

import React, { useEffect, useMemo, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useSelector, useDispatch } from "react-redux";
import { getbody } from "../../../redux/modal/selectors";
import { setActive } from "../../../redux/modal/slice";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: any;
  materials: any;
};

function ShoeModel(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "/assets/shoeModal/shoe.glb"
  ) as GLTFResult;
  const value = useSelector(getbody);
  const dispatch = useDispatch();
  const [hovered, set] = useState<any>();
  const [mesh, setMesh] = useState([]);

  useEffect(() => {
    const cursor = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><g filter="url(#filter0_d)"><path d="M29.5 47C39.165 47 47 39.165 47 29.5S39.165 12 29.5 12 12 19.835 12 29.5 19.835 47 29.5 47z" fill="${value[hovered]}"/></g><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/><text fill="#000" style="white-space:pre" font-family="Inter var, sans-serif" font-size="10" letter-spacing="-.01em"><tspan x="35" y="63">${hovered}</tspan></text></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h64v64H0z"/></clipPath><filter id="filter0_d" x="6" y="8" width="47" height="47" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="2"/><feGaussianBlur stdDeviation="3"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs></svg>`;
    const auto = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/></svg>`;
    document.body.style.cursor = `url('data:image/svg+xml;base64,${btoa(
      hovered ? cursor : auto
    )}'), auto`;
  }, [hovered]);
  //
  useMemo(() => {
    const Type = "Mesh";
    let meshType = Object.values(nodes).filter((val: any) => val.type === Type);
    setMesh(meshType as any);
  }, [nodes, materials]);
  //
  return (
    <group
      {...props}
      dispose={null}
      scale={2.7}
      onPointerOver={(e: any) => (
        e.stopPropagation(), set(e.object.material.name)
      )}
      onPointerOut={(e) => e.intersections.length === 0 && set(null)}
      onPointerMissed={() => dispatch(setActive(""))}
      onPointerDown={(e: any) => (
        e.stopPropagation(), dispatch(setActive(e.object.material.name))
      )}
    >
      {mesh?.map((item: any, index: any) => (
        <mesh
          key={index}
          geometry={item.geometry}
          material={materials[item.material.name]}
          material-color={value[item.material.name]}
        />
      ))}
    </group>
  );
}

useGLTF.preload("/assets/shoeModal/shoe.glb");

export default ShoeModel;
