import { useGLTF } from "@react-three/drei";
import React from "react";

export const PCSetup = () => {
  const { scene } = useGLTF("models/PCSetup.glb");
  return (
    <group>
      <primitive object={scene} />
    </group>
  );
};
