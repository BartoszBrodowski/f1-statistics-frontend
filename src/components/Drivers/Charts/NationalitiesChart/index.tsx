"use client";

import f1Api from "@/utils/axiosConfig";
import { useQuery } from "@tanstack/react-query";
import { useTheme } from "next-themes";
import { FC } from "react";
import Chart from "../Chart";

interface NationalitiesData {
  nationality: string;
  count: number;
}

const NationalitiesChart: FC = ({}) => {
  const { theme, setTheme } = useTheme();
  const { isLoading, isError, data, refetch } = useQuery({
    queryKey: ["drivers", "top", "nationalities"],
    queryFn: async () => {
      const { data } = await f1Api.get("/drivers/top/nationalities");
      return data.slice(0, 7) as NationalitiesData[];
    },
  });
  return (
    <Chart
      isLoading={isLoading}
      isError={isError}
      refetch={refetch}
      data={data}
      XDataKey="nationality"
      BarDataKey="count"
      theme={theme}
    />
  );
};

export default NationalitiesChart;
