import React from "react";
import { WallFloor } from "./WallFloor";
import { PCSetup } from "./PCSetup";
import { Shelf } from "./Shelf";
import { Rug } from "./Rug";
import { FlowerPort } from "./FlowerPort";
import { Frame1 } from "./Frame1";
import { Frame2 } from "./Frame2";
import { Globe } from "./Globe";
import { Window } from "./Window";

export const Office = () => {
  return (
    <group>
      <WallFloor />
      <Window />
      <FlowerPort />
      <Frame1 />
      <Frame2 />
      <Shelf />
      <Rug />
      <Globe />
      <PCSetup />
    </group>
  );
};
