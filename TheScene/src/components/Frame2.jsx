import { useGLTF } from "@react-three/drei";
import React from "react";

export const Frame2 = () => {
  const { scene } = useGLTF("models/Image2.glb");
  return (
    <group>
      <primitive object={scene} />
    </group>
  );
};
