import { FC } from "react";
import Nationalities from "@/components/Drivers/Nationalities";
import ChampionsAge from "@/components/Drivers/ChampionsAge";
import TitlesWon from "@/components/Drivers/TitlesWon";
import { Flex } from "@radix-ui/themes";

const Drivers: FC = () => {
  return (
    <Flex direction="column" className="gap-8">
      <Nationalities />
      <TitlesWon />
      <ChampionsAge />
    </Flex>
  );
};

export default Drivers;
