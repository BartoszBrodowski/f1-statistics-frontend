import { FC } from "react";
import NationalitiesChart from "../Charts/NationalitiesChart";
import { Box, Flex, Heading, ScrollArea, Text } from "@radix-ui/themes";
import ReadMore from "@/components/ReadMore";
import FunFactBox from "@/components/FunfactBox";

const Nationalities: FC = ({}) => {
  return (
    <Box className="flex gap-8 justify-center items-center min-h-screen [&>*]:h-full">
      <NationalitiesChart />
      <Flex direction="column" gap="4" pl="6" className="w-[45%]">
        <Heading size="8" className="dark:text-white">
          Top Nationalities
        </Heading>
        <Box className="text-gray9">
          <Heading size="5">
            The chart on the left shows the top 7 nationalities with the most
            drivers in Formula 1 history.
          </Heading>
        </Box>
        <ReadMore>
          <ScrollArea
            className="pr-12 max-h-full"
            type="auto"
            scrollbars="vertical"
            style={{ width: "100%", height: "fit-content", maxHeight: 240 }}
          >
            <Flex direction="column" gap="4">
              <Text size="4" className="dark:text-white">
                Every driver represents a place of their origin. Some drivers
                have more than one nationality, therefore they have to declare
                the nationality they represent. It's important as whenever a
                drivers wins a race, the national anthem of the country they
                represent is played.
              </Text>
              <FunFactBox>
                Alexander Albon, despite being born and raised in Great Britain,
                chose to represent Thailand embracing his Thai identity.
              </FunFactBox>
            </Flex>
          </ScrollArea>
        </ReadMore>
      </Flex>
    </Box>
  );
};

export default Nationalities;
