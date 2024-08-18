import React from "react";
import { Label, LabelInputContainer } from "@/components/ui/input/label";
import { Input } from "@/components/ui/input/input";
import DefaultForm from "./components/defaultForm";

export default function RegisterOrganization() {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <DefaultForm
      handleSubmit={handleSubmit}
      title="Sign up as an archery club"
      submitText="Sign up &rarr;"
      redirects={[
        {
          text: "Need a personal account?",
          href: "/signup/individual",
          linkText: "Sign up as an individual",
        },
        {
          text: "Already have an account?",
          href: "/signin",
          linkText: "Sign in",
        },
      ]}
    >
      <LabelInputContainer>
        <Label htmlFor="name">Name</Label>
        <Input id="name" placeholder="Deep South Archery Club" />
      </LabelInputContainer>
      <LabelInputContainer>
        <Label htmlFor="address">Address</Label>
        <Input id="address" placeholder="123 Tay St" type="text" />
      </LabelInputContainer>
      <LabelInputContainer>
        <Label htmlFor="registration">Registration</Label>
        <Input id="registration" placeholder="123456789" />
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
        <Label htmlFor="email">Email Address</Label>
        <Input id="email" placeholder="manager@archeryclub.com" type="email" />
      </LabelInputContainer>
      <LabelInputContainer>
        <Label htmlFor="password">Password</Label>
        <Input id="password" placeholder="••••••••" type="password" />
      </LabelInputContainer>
      <LabelInputContainer>
        <Label htmlFor="confirmpassword">Confirm password</Label>
        <Input id="confirmpassword" placeholder="••••••••" type="password" />
      </LabelInputContainer>
    </DefaultForm>
  );
}
