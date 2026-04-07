import { useLoader } from "@react-three/fiber";
import React from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export const FlowerPort = () => {
  const model = useLoader(GLTFLoader, "models/FlowerPort.glb");
  return (
    <group>
      <primitive object={model.scene} />
    </group>
  );
};
