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
import axios from "axios";

interface DriversData {
  nationality: string;
  count: number;
}

const DriversChart: FC = ({}) => {
  const { data } = useQuery({
    queryFn: async () => {
      const { data } = await axios.get(
        "http://localhost:5000/drivers/top/nationalities"
      );
      return data.slice(0, 7) as DriversData[];
    },
  });

  return (
    <div className="flex gap-8 justify-center items-center w-full">
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
            <Tooltip
              cursor={{ fill: "#333" }}
              contentStyle={{ color: "black" }}
            />
            <Bar dataKey="count" fill="red" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </Card>
      <div className="flex flex-col gap-6 w-[45%]">
        <h1 className="text-4xl font-bold">Top Nationalities</h1>
        <div className="text-gray9 flex flex-col gap-2">
          <p>
            Every driver represents a place of their origin. Some drivers have
            more than one nationality, therefore they have to declare the
            nationality they represent.
          </p>
          <p>
            Alexander Albon, despite being born and raised in Great Britain,
            chose to represent Thailand embracing his Thai identity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DriversChart;
