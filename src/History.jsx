import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { useAuth } from "./components/authProvider";
import { Timeline } from "./components/timeline";

export default function History() {
  const { authToken } = useAuth();

  const getScores = async () => {
    return await fetch(import.meta.env.VITE_API_URL + "/api/Score", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${authToken}`,
      },
    }).then((response) => {
        if (response.ok) return response.json();
      }).then((data) => {
        return data;
      }).catch((error) => {
        toast.error("There was an error getting your scores");
      });
  };

  const { data, isLoading, isError, error } = useQuery({queryKey: ["getScores"], queryFn: getScores });

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (!data) {
    return <span className="text-center">Your shooting history is still empty. Go to the <Link to="/scoring" className="underline text-foreground hover:text-accent transition duration-300">scoring page</Link> to start saving your scores.</span>;
  }

  if (isError) {
    return <span className="text-center">{error.message}</span>;
  }

  return (
    <Timeline
      data={data.map(item => ({
        title: item.event_Name,
        accumulative: item.scores.reduce((acc, score) => acc + score, 0),
        date: new Date(item.formattedCreatedOn).toLocaleDateString([], {timeZone: 'Pacific/Auckland', month: 'short', day: '2-digit', year: 'numeric'}),
        values: [
          {
            value: new Date(item.formattedCreatedOn).toLocaleTimeString([], {timeZone: 'Pacific/Auckland', hour: '2-digit', minute: '2-digit'}),
            name: "Time",
          },
          {
            name: "Arrows",
            value: item.arrowShots/item.ends,
          },
          {
            name: "Ends",
            value: item.ends,
          },
          {
            name: "Distance",
            value: [...new Set(item.distance)].join(", "),
          },
          {
            name: "Shots",
            value: item.arrowShots,
          }
        ]
      }))}
    />
  );
}
