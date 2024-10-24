import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "./components/authProvider";

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export default function Analytics() {
  const { authToken } = useAuth();

  const getScores = async () => {
    const response = await fetch(import.meta.env.VITE_API_URL + "/api/Score", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${authToken}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch scores');
    }

    return response.json();
  };

  const chartConfig = {
    score: {
      label: "Score",
      color: "var(--chart-1)",
    },
    bullseye: {
      label: "Bullseye",
      color: "var(--chart-2)",
    },
  }

  const { data, isLoading, isError, error } = useQuery({queryKey: ["getScores"], queryFn: getScores });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="min-w-[50vw] px-2">
      <Card>
        <CardHeader>
          <CardTitle>Scores Over Time</CardTitle>
          <CardDescription>
            Showing your archer scores profression over time
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig}>
            <AreaChart
              accessibilityLayer
              data={data.map(item => ({
                month: new Date(item.formattedCreatedOn).toLocaleDateString([], {timeZone: 'Pacific/Auckland', month: 'short', day: '2-digit'}),
                scores: item.scores.reduce((acc, score) => acc + score, 0),
                bullseye: item.scores.reduce((acc, score) => acc + score, 0) * 0.8,
              })).reverse()}
              margin={{
                left: 12,
                right: 12,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickCount={4}
              />
              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
              <defs>
                <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="var(--color-score)"
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor="var(--color-score)"
                    stopOpacity={0.1}
                  />
                </linearGradient>
                <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="var(--color-bullseye)"
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor="var(--color-bullseye)"
                    stopOpacity={0.1}
                  />
                </linearGradient>
              </defs>
              <Area
                dataKey="scores"
                type="natural"
                fill="url(#fillMobile)"
                fillOpacity={0.4}
                stroke="var(--color-bullseye)"
                stackId="a"
              />
              <Area
                dataKey="bullseye"
                type="natural"
                fill="url(#fillDesktop)"
                fillOpacity={0.4}
                stroke="var(--color-score)"
                stackId="a"
              />
            </AreaChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
}
