import { useGLTF } from "@react-three/drei";
import React from "react";

export const Globe = () => {
  const { scene } = useGLTF("models/Globe.glb");
  return (
    <group>
      <primitive object={scene} />
    </group>
  );
};
