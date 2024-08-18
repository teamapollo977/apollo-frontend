import React from "react";
import { Label, LabelInputContainer } from "@/components/ui/input/label";
import { Input } from "@/components/ui/input/input";
import DefaultForm from "./components/defaultForm";

export default function Signin() {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <DefaultForm
      handleSubmit={handleSubmit}
      title="Sign in"
      submitText="Sign in"
      redirects={[
        {
          text: "Don't have an account yet?",
          href: "/signup",
          linkText: "Sign up",
        }
      ]}
    >
      <LabelInputContainer>
        <Label htmlFor="email">Email</Label>
        <Input id="email" placeholder="manager@archeryclub.com" type="email" />
      </LabelInputContainer>
      <LabelInputContainer>
        <Label htmlFor="password">Password</Label>
        <Input id="password" placeholder="••••••••" type="password" />
      </LabelInputContainer>
    </DefaultForm>
  );
}
