import React from "react";
import { Timeline } from "./components/timeline";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "./components/authProvider";

export default function History() {
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

  const { data, isLoading, isError, error } = useQuery({queryKey: ["getScores"], queryFn: getScores });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Timeline
      data={data.map(item => ({
        title: "Shooting Session",
        accumulative: item.scores.reduce((acc, score) => acc + score, 0),
        date: new Date(item.createdOn).toLocaleDateString([], {timeZone: 'Pacific/Auckland', month: 'short', day: '2-digit', year: 'numeric'}),
        time: new Date(item.createdOn).toLocaleTimeString([], {timeZone: 'Pacific/Auckland', hour: '2-digit', minute: '2-digit'}),
        arrows: item.arrowShots,
        ends: item.ends,
        distances: [...new Set(item.distance)],
        location: "Deep South Archery Club",
        weather: "Sunny",
      }))}
    />
  );
}
