import { useGLTF } from "@react-three/drei";
import React from "react";

export const Frame1 = () => {
  const { scene } = useGLTF("models/Image1.glb");
  return (
    <group>
      <primitive object={scene} />
    </group>
  );
};
