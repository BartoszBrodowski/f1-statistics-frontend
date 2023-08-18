"use client";

import { FC } from "react";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { useQuery } from "@tanstack/react-query";
import { Card } from "@/components/ui/card";
import f1Api from "@/utils/axiosConfig";
import { useTheme } from "next-themes";

interface DriversData {
  nationality: string;
  count: number;
}

const DriversChart: FC = ({}) => {
  const { theme, setTheme } = useTheme();
  const { data } = useQuery({
    queryKey: ["drivers", "top", "nationalities"],
    queryFn: async () => {
      const { data } = await f1Api.get(
        "http://localhost:5000/drivers/top/nationalities"
      );
      return data.slice(0, 7) as DriversData[];
    },
  });

  return (
    <Card className="w-2/5 py-6 pr-8">
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data}>
          <XAxis
            dataKey="nationality"
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
            dataKey="count"
            fill="red"
            radius={[4, 4, 4, 4]}
            label={{ fill: theme === "dark" ? "#fff" : "#000" }}
          />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default DriversChart;
