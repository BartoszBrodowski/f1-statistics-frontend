import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Flex } from "@radix-ui/themes";
import { FC } from "react";

interface ChartSkeletonProps {}

const ChartSkeleton: FC<ChartSkeletonProps> = ({}) => {
  return (
    <Card className="w-2/5 p-10 py-6">
      <Flex align="end" gap="5" className="h-[350px]">
        <Skeleton className="bg-mauve11 w-1/6 h-2/5" />
        <Skeleton className="bg-mauve11 w-1/6 h-4/5" />
        <Skeleton className="bg-mauve11 w-1/6 h-full" />
        <Skeleton className="bg-mauve11 w-1/6 h-1/3" />
        <Skeleton className="bg-mauve11 w-1/6 h-1/5" />
      </Flex>
    </Card>
  );
};

export default ChartSkeleton;
