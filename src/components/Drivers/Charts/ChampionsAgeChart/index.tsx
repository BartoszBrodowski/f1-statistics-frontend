"use client";

import ChartError from "@/components/ChartError";
import { Card } from "@/components/ui/card";
import f1Api from "@/utils/axiosConfig";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useTheme } from "next-themes";
import { FC } from "react";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import ChartSkeleton from "../ChartSkeleton";

interface ChampionsAgeData {
  category: string;
  count: number;
}

const ChampionsAgeChart: FC = ({}) => {
  const { theme, setTheme } = useTheme();
  const { isError, isLoading, data, error, refetch } = useQuery<
    ChampionsAgeData[],
    AxiosError
  >({
    queryKey: ["championsAge"],
    queryFn: async () => {
      const response = await f1Api.get(
        "http://127.0.0.1:5000/drivers/championships/average_age"
      );
      if (response.status !== 200)
        return Promise.reject(new AxiosError(response.statusText));
      return response.data;
    },
    retry: false,
  });
  if (isLoading) return <ChartSkeleton />;

  if (isError) return <ChartError refetch={refetch} />;
  return (
    <Card className="w-2/5 py-6 pr-8">
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data}>
          <XAxis
            dataKey="category"
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

export default ChampionsAgeChart;
