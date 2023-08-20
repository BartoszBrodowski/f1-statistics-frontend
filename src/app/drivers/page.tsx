import { FC } from "react";
import Nationalities from "@/components/Drivers/Nationalities";
import ChampionsAge from "@/components/Drivers/ChampionsAge";

const Drivers: FC = () => {
  return (
    <div>
      <Nationalities />
      <ChampionsAge />
    </div>
  );
};

export default Drivers;
