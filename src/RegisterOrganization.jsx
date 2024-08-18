import React from "react";
import { Label, LabelInputContainer } from "@/components/ui/label";
import { Input } from "@/components/ui/input/input";
import DefaultButton from "./components/defaultButton";

export default function RegisterIndividual() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <main className="grid w-screen h-screen place-content-center gap-5">
      <div className="w-full rounded-none rounded-2xl p-4 md:p-8 shadow-input backdrop-blur-xl">
        <h2 className="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-br from-inverted-background to-inverted-medium">
          Sign up as an archery club
        </h2>
        <p className="text-inverted-medium text-sm max-w-sm mt-2">
          Need a personal account? <a href="/signup/individual" className="underline text-foreground hover:text-accent transition duration-300">Sign up as an individual</a>
        </p>
        <p className="text-inverted-medium text-sm max-w-sm mt-2">
          Already have an account? <a href="/signin" className="underline text-foreground hover:text-accent transition duration-300">Sign in</a>
        </p>

        <form className="my-8 flex flex-col gap-4" onSubmit={handleSubmit}>
          <LabelInputContainer>
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Deep South Archery Club" type="text" />
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
            <Label htmlFor="address">Supervisor</Label>
            <Input id="address" placeholder="John Johnson" type="text" />
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
            <Input
              id="confirmpassword"
              placeholder="••••••••"
              type="password"
            />
          </LabelInputContainer>

          <DefaultButton>
            Sign up &rarr;
          </DefaultButton>
        </form>
      </div>
    </main>
  );
}
