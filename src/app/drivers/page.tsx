import { FC } from "react";
import Chart from "./Chart";
import { Text, Heading, Box, Flex, CalloutIcon } from "@radix-ui/themes";
import FunFactBox from "@/components/FunfactBox";
import ReadMore from "@/components/ReadMore";

const Drivers: FC = () => {
  return (
    <Box className="flex gap-8 justify-center items-center min-h-screen">
      <Chart />
      <Flex direction="column" gap="4" pl="6" className="w-[45%]">
        <Heading size="8" className="dark:text-white">
          Top Nationalities
        </Heading>
        <Flex direction="column" className="text-gray9">
          <Heading size="5">
            The chart on the left shows the top 7 nationalities with the most
            drivers in Formula 1 history.
          </Heading>
        </Flex>
        <ReadMore>
          <Flex direction="column" gap="2">
            <Text size="4" className="dark:text-white">
              Every driver represents a place of their origin. Some drivers have
              more than one nationality, therefore they have to declare the
              nationality they represent.
            </Text>
            <FunFactBox>
              Alexander Albon, despite being born and raised in Great Britain,
              chose to represent Thailand embracing his Thai identity.
            </FunFactBox>
          </Flex>
        </ReadMore>
      </Flex>
    </Box>
  );
};

export default Drivers;
