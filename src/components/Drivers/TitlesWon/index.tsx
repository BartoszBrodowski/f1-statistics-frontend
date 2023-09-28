import { FC } from "react";
import { Box, Flex, Heading, ScrollArea, Text } from "@radix-ui/themes";
import TitlesWonChart from "@/components/Charts/TitlesWonChart";
import ReadMore from "@/components/ReadMore";
import FunFactBox from "@/components/FunfactBox";

const TitlesWon: FC = ({}) => {
  return (
    <Box className="flex gap-8 justify-center items-center min-h-screen [&>*]:h-full">
      <Flex direction="column" gap="4" pl="6" className="w-[45%]">
        <Heading size="8" className="dark:text-white">
          Titles Won
        </Heading>
        <Box className="text-gray9">
          <Heading size="5">
            Chart shows the amount of drivers that won the championship
            particular number of times.
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
      <TitlesWonChart />
    </Box>
  );
};

export default TitlesWon;
