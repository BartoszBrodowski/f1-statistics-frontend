import { FC } from "react";
import { Card } from "@/components/ui/card";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import ChartSkeleton from "./ChartSkeleton";
import ChartError from "@/components/ChartError";

interface ChartProps {
  isLoading: boolean;
  isError: boolean;
  refetch: () => void;
  data: any;
  XDataKey: string;
  BarDataKey: string;
  theme: string | undefined;
}

const Chart: FC<ChartProps> = ({
  isLoading,
  isError,
  refetch,
  data,
  XDataKey,
  BarDataKey,
  theme,
}) => {
  return isError ? (
    <ChartError refetch={refetch} />
  ) : isLoading ? (
    <ChartSkeleton />
  ) : (
    <Card className="w-2/5 py-6 pr-8">
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data}>
          <XAxis
            dataKey={XDataKey}
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `${value}`}
          />
          <Bar
            dataKey={BarDataKey}
            fill="red"
            radius={[4, 4, 4, 4]}
            label={{ fill: theme === "dark" ? "#fff" : "#000" }}
          />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default Chart;
