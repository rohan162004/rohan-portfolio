import React from "react";
import { WallFloor } from "./WallFloor";
import { PCSetup } from "./PCSetup";
import { Shelf } from "./Shelf";
import { Rug } from "./Rug";
import { FlowerPort } from "./FlowerPort";

import { Globe } from "./Globe";
import { Window } from "./Window";
import { Frames } from "./Frames";

export const Office = ({ section }) => {
  return (
    <group>
      <WallFloor />
      <Window />
      <FlowerPort section={section} />
      <Frames />
      <Shelf section={section} />
      <Rug section={section} />
      <Globe section={section} />
      <PCSetup section={section} />
    </group>
  );
};
// Shelf(Astronout , LavaLamp) Done! ,Rug Done! , PCSetup(IMac , Globe Done! , Chair Done!) , FlowerPort Done!
