import React from "react";
import { Label, LabelInputContainer } from "@/components/ui/input/label";
import { Input } from "@/components/ui/input/input";
import DefaultForm from "./components/defaultForm";

export default function RegisterIndividual() {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <DefaultForm
      handleSubmit={handleSubmit}
      title="Sign up as an archer"
      submitText="Sign up &rarr;"
      redirects={[
        {
          text: "Managing an achery club?",
          href: "/signup/organization",
          linkText: "Sign up as an organization",
        },
        {
          text: "Already have an account?",
          href: "/signin",
          linkText: "Sign in",
        },
      ]}
    >
      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
        <LabelInputContainer>
          <Label htmlFor="firstname">First Name</Label>
          <Input id="firstname" placeholder="John" type="text" />
        </LabelInputContainer>
        <LabelInputContainer>
          <Label htmlFor="lastname">Last Name</Label>
          <Input id="lastname" placeholder="Johnson" type="text" />
        </LabelInputContainer>
      </div>
      <LabelInputContainer>
        <Label htmlFor="dob">Date of Birth</Label>
        <Input id="dob" placeholder="projectmayhem@fc.com" type="date" />
      </LabelInputContainer>
      <LabelInputContainer>
        <Label htmlFor="phone">Phone Number</Label>
        <Input id="phone" placeholder="12 345 6789" type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
      </LabelInputContainer>
      <LabelInputContainer>
        <Label htmlFor="email">Email Address</Label>
        <Input id="email" placeholder="archer@archery.com" type="email" />
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
