import { useGLTF } from "@react-three/drei";
import React from "react";

export const Window = () => {
  const { scene } = useGLTF("models/WindowGlass.glb");
  return (
    <group>
      <primitive object={scene} />
    </group>
  );
};
