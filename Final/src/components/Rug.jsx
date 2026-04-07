import { useGLTF } from "@react-three/drei";
import React from "react";
import { motion } from "framer-motion-3d";

export const Rug = ({ section }) => {
  const { scene } = useGLTF("models/Rug.glb");
  return (
    <motion.group
      scale={[0, 0, 0]}
      animate={{
        scale: section === 0 ? 1 : 0,
      }}
    >
      <primitive object={scene} />
    </motion.group>
  );
};
