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
import Chart from "../Chart";

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
  return (
    <Chart
      isLoading={isLoading}
      isError={isError}
      refetch={refetch}
      data={data}
      XDataKey="category"
      BarDataKey="count"
      theme={theme}
    />
  );
};

export default ChampionsAgeChart;
