import { useGLTF, useTexture } from "@react-three/drei";
import React from "react";

export const WallFloor = () => {
  const { scene } = useGLTF("models/WallFloor.glb");

  return (
    <group>
      <primitive object={scene} />
    </group>
  );
};
