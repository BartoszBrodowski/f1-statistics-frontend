import { Button, Flex, Text } from "@radix-ui/themes";
import { FC } from "react";
import { Card } from "../ui/card";

interface ChartErrorProps {
  refetch: () => void;
}

const ChartError: FC<ChartErrorProps> = ({ refetch }) => {
  return (
    <Card className="w-2/5 p-8">
      <Flex
        direction="column"
        justify="center"
        align="center"
        gap="4"
        className="text-black dark:text-white h-[350px] w-full"
      >
        <Text size="5" align="center">
          Something went wrong while trying to get the chart data. Click the
          button to try again.
        </Text>
        <Button size="3" onClick={() => refetch()}>
          Retry
        </Button>
      </Flex>
    </Card>
  );
};

export default ChartError;
