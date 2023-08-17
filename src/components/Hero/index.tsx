import { Quote, Flex, Heading, Text } from "@radix-ui/themes";
import { FC } from "react";

const Hero: FC = () => {
  return (
    <div className="flex gap-12 flex-col justify-center items-center h-screen">
      <div className="flex flex-col items-center gap-2 w-2/3">
        <Heading size="7" className="dark:text-white">
          Formula1 statistics from all seasons combined in one place!
        </Heading>
        <Text as="p" className="text-lg text-center text-gray9">
          From distinct graphs to complex tables, all containing concise
          information. The information was analised and conclusions were drawn
          which you can see on the site.
        </Text>
      </div>
      <Flex className="flex flex-col gap-1 justify-center items-center text-gray9 dark:text-gray11">
        <Quote className="flex items-center text-2xl italic font-extralight font-quote">
          If you no longer go for a gap that exists, you're no longer a racing
          driver
        </Quote>
        <Text as="p" className="text-lg font-quote">
          -Ayrton Senna
        </Text>
      </Flex>
    </div>
  );
};

export default Hero;
