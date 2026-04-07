import { OrbitControls, Sky } from "@react-three/drei";
import { Office } from "./Office";

export const Experience = () => {
  return (
    <>
      <OrbitControls />
      <ambientLight />
      <Office />
    </>
  );
};
