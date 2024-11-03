import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { useAuth } from "./components/authProvider";
import { Timeline } from "./components/timeline";

export default function UpcomingEvents() {
  const { authToken } = useAuth();

  const getEvents = async () => {
    return await fetch(import.meta.env.VITE_API_URL + "/api/Event/Mobile/GetEvents", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${authToken}`,
      },
    }).then((response) => {
        if (response.ok) return response.json();
      }).then((data) => {
        return data.filter(event => event.eventID !== 3);
      }).catch((error) => {
        toast.error("There was an error getting upcoming events");
      });
  };

  const subscribeToEvent = async (eventName) => {
    return await fetch(import.meta.env.VITE_API_URL + "/api/Event/Add-me?eventName=" + eventName, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${authToken}`,
      },
    }).then((response) => {
        if (response.ok) toast.success("You have successfully subscribed to the event");
      }).catch((error) => {
        toast.error("There was an error subscribing to the event. Please try again.");
      });
  };

  const { data, isLoading, isError, error } = useQuery({queryKey: ["getEvents"], queryFn: getEvents });

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (!data) {
    return <span className="text-center">Your are currently not subscribed to any event. Go to the <Link to="/competition" className="underline text-foreground hover:text-accent transition duration-300">events page</Link> to check upcoming events.</span>;
  }

  if (isError) {
    return <span className="text-center">{error.message}</span>;
  }

  return (
    <Timeline data={data.map(event => ({
      title: event.event_Name,
      date: new Date(event.startDate).toLocaleDateString([], {timeZone: 'Pacific/Auckland', month: 'short', day: '2-digit', year: 'numeric'}),
      values: [
        {
          value: new Date(event.startDate).toLocaleDateString([], {timeZone: 'Pacific/Auckland', month: 'short', day: '2-digit', year: 'numeric'}),
          name: "Start Date",
        },
        {
          value: new Date(event.endDate).toLocaleDateString([], {timeZone: 'Pacific/Auckland', month: 'short', day: '2-digit', year: 'numeric'}),
          name: "End Date",
        },
        {
          value: event.type,
          name: "Type",
        },
        {
          value: event.location,
          name: "Location",
        }
      ]
    }))}
    />
  );
}
