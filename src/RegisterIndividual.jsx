import React from "react";
import { Label, LabelInputContainer } from "@/components/ui/label";
import { Input } from "@/components/ui/input/input";
import DefaultButton from "@/components/defaultButton";

export default function RegisterIndividual() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <main className="grid w-screen h-screen place-content-center gap-5">
      <div className="w-full mx-auto rounded-none rounded-2xl p-4 md:p-8 shadow-input backdrop-blur-xl">
        <h2 className="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-br from-inverted-background to-inverted-medium">
          Sign up as an archer
        </h2>
        <p className="text-inverted-medium text-sm max-w-sm mt-2">
          Managing an achery club? <a href="/signup/organization" className="underline text-foreground hover:text-accent transition duration-300">Sign up as an organization</a>
        </p>
        <p className="text-inverted-medium text-sm max-w-sm mt-2">
          Already have an account? <a href="/signin" className="underline text-foreground hover:text-accent transition duration-300">Sign in</a>
        </p>

        <form className="my-8 flex flex-col gap-4" onSubmit={handleSubmit}>
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
