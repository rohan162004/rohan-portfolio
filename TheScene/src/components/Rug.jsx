import { useGLTF } from "@react-three/drei";
import React from "react";

export const Rug = () => {
  const { scene } = useGLTF("models/Rug.glb");
  return (
    <group>
      <primitive object={scene} />
    </group>
  );
};
