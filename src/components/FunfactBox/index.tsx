import { FC, ReactNode } from "react";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import { Box, Flex, Text } from "@radix-ui/themes";

interface FunFactBoxProps {
  children?: ReactNode;
}

const FunFactBox: FC<FunFactBoxProps> = ({ children }) => {
  return (
    <Flex
      align="center"
      gap="3"
      className={`w-full bg-red4 text-red11 dark:bg-red12 dark:text-red7 p-4 py-3 rounded-lg`}
    >
      <InfoCircledIcon height={28} width={28} />
      <Text>{children}</Text>
    </Flex>
  );
};

export default FunFactBox;
