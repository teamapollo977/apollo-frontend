import React from "react";
import { Label, LabelInputContainer } from "@/components/ui/input/label";
import { Input } from "@/components/ui/input/input";
import DefaultForm from "./components/defaultForm";

export default function Competition() {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <DefaultForm
      handleSubmit={handleSubmit}
      title="Create competition"
      submitText="Submit &rarr;"
    >
      <LabelInputContainer>
        <Label htmlFor="name">Name</Label>
        <Input id="name" placeholder="Southland Archery Competition 2024" />
      </LabelInputContainer>
      <LabelInputContainer>
        <Label htmlFor="clubs">Clubs</Label>
        <Input id="clubs" placeholder="Deep South Archery Club" type="text" />
      </LabelInputContainer>
      <LabelInputContainer>
        <Label htmlFor="address">Address</Label>
        <Input id="address" placeholder="123 Tay St" type="text" />
      </LabelInputContainer>
      <LabelInputContainer>
        <Label htmlFor="supervisor">Supervisor</Label>
        <Input id="supervisor" placeholder="John Johnson" type="text" />
      </LabelInputContainer>
      <LabelInputContainer>
        <Label htmlFor="phone">Phone Number</Label>
        <Input id="phone" placeholder="12 345 6789" type="tel" />
      </LabelInputContainer>
      <LabelInputContainer>
        <Label htmlFor="email">Email</Label>
        <Input id="email" placeholder="manager@archeryclub.com" type="email" />
      </LabelInputContainer>
    </DefaultForm>
  );
}
