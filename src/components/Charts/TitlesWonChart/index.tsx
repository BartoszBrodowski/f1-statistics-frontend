"use client";

import f1Api from "@/utils/axiosConfig";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useTheme } from "next-themes";
import { FC } from "react";
import Chart from "../Chart";

interface TitlesWonData {
  drivers_amount: number;
  titles: number;
}

const TitlesWonChart: FC = ({}) => {
  const { theme, setTheme } = useTheme();
  const { isError, isLoading, data, refetch } = useQuery<
    TitlesWonData[],
    AxiosError
  >({
    queryKey: ["titlesWon"],
    queryFn: async () => {
      const response = await f1Api.get(
        "/drivers/championships/most_titles/amount"
      );
      if (response.status !== 200)
        return Promise.reject(new AxiosError(response.statusText));
      return response.data;
    },
    retry: false,
  });
  console.log("Titles won", data);
  return (
    <Chart
      data={data}
      isLoading={isLoading}
      isError={isError}
      refetch={refetch}
      XDataKey="titles"
      BarDataKey="drivers_amount"
      theme={theme}
    />
  );
};

export default TitlesWonChart;
