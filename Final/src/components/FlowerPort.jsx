import { useLoader } from "@react-three/fiber";
import React from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { motion } from "framer-motion-3d";

export const FlowerPort = ({ section }) => {
  const model = useLoader(GLTFLoader, "models/FlowerPort.glb");
  return (
    <motion.group
      scale={[0, 0, 0]}
      animate={{
        scale: section === 0 ? 1 : 0,
      }}
    >
      <primitive object={model.scene} />
    </motion.group>
  );
};
