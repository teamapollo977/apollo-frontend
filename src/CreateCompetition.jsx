import React from "react";
import { useForm, Controller } from "react-hook-form";
import { useAuth } from "./components/authProvider";
import DefaultForm from "./components/defaultForm";

import { Label, LabelInputContainer } from "@/components/ui/input/label";
import { Input } from "@/components/ui/input/input";

export default function CreateCompetition() {
  const { authToken, loading } = useAuth();

  const {
    register,
    control,
    handleSubmit,
    formState: {
      errors,
      isSubmitting,
    }
  } = useForm();

  const handleEventCreation = async () => {
    await fetch(import.meta.env.VITE_API_URL + "/api/Event", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${authToken}`,
      },
    }).then((response) => {
        if (response.ok) {
          return response.json();
        }
      }).then((data) => {
        return data;
      }).catch((error) => {
        throw new Error("There was an error creating the event. Please try again.");
      });
  };

  return (
    <DefaultForm
      handleSubmit={handleSubmit(handleEventCreation)}
      title="Create a new archery competition"
      submitText="Submit &rarr;"
    >
      <LabelInputContainer>
        <Label htmlFor="event_Name">Name</Label>
        <Input
          id="event_Name"
          placeholder="Southland Archery Competition 2024"
          type="text"
          {...register("event_Name", {
            required: "Name is required",
          })}
          disabled={isSubmitting || loading}
        />
      </LabelInputContainer>
      <LabelInputContainer>
        <Label htmlFor="location">Location</Label>
        <Input
          id="location"
          placeholder="Deep South Archery Club"
          type="text"
          {...register("location", {
            required: "Location is required",
          })}
          disabled={isSubmitting || loading}
        />
      </LabelInputContainer>
      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
        <LabelInputContainer>
          <Label htmlFor="startDate">Start Date</Label>
          <Input
            id="startDate"
            type="date"
            {...register("startDate", {
              required: "Start Date is required",
            })}
            disabled={isSubmitting || loading}
          />
        </LabelInputContainer>
        <LabelInputContainer>
          <Label htmlFor="endDate">End Date</Label>
          <Input
            id="endDate"
            type="date"
            {...register("endDate", {
              required: "End Date is required",
            })}
            disabled={isSubmitting || loading}
          />
        </LabelInputContainer>
      </div>
    </DefaultForm>
  );
}
