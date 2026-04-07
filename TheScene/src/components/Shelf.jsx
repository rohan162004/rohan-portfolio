import { useGLTF } from "@react-three/drei";
import React from "react";

export const Shelf = () => {
  const { scene } = useGLTF("models/Shelf.glb");
  return (
    <group>
      <primitive object={scene} />
    </group>
  );
};
