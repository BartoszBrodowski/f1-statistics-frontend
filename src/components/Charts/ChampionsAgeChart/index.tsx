"use client";

import f1Api from "@/utils/axiosConfig";
import { Flex } from "@radix-ui/themes";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { ArcElement, Chart, Legend, PieController, Tooltip } from "chart.js";
import { useTheme } from "next-themes";
import { FC } from "react";
import { Chart as ReactChart } from "react-chartjs-2";

interface ChampionsAgeData {
  category: string;
  count: number;
}

Chart.register(PieController, ArcElement, Tooltip, Legend);

const ChampionsAgeChart: FC = ({}) => {
  const { theme, setTheme } = useTheme();
  const { isError, isLoading, data, refetch } = useQuery<
    ChampionsAgeData[],
    AxiosError
  >({
    queryKey: ["championsAge"],
    queryFn: async () => {
      const response = await f1Api.get("/drivers/championships/average_age");
      if (response.status !== 200)
        return Promise.reject(new AxiosError(response.statusText));
      return response.data;
    },
    retry: false,
  });

  const chartData = {
    labels: data?.map((item) => item.category),
    datasets: [
      {
        label: "# of drivers",
        data: data?.map((item) => item.count),
        backgroundColor: [
          "#358C75", // Aston Martin
          "#6CD3BF", // Mercedes
          "#3671C6", // Red Bull
          "#F91536", // Ferrari
          "#F58020", // Mc Laren
        ],
        borderWidth: 0,
      },
    ],
  };
  const chartOptions = {
    plugins: {
      legend: { labels: { color: theme === "dark" ? "white" : undefined } },
      tooltip: {
        titleColor: theme === "dark" ? "white" : undefined,
        bodyColor: theme === "dark" ? "white" : undefined,
      },
    },
  };

  return (
    <Flex justify="center" className="w-2/5">
      <Flex justify="center" className="w-3/5">
        <ReactChart type="pie" data={chartData} options={chartOptions} />
      </Flex>
    </Flex>
  );
};

export default ChampionsAgeChart;
