import React, { useState, useEffect } from "react";
import { Label, LabelInputContainer } from "@/components/ui/input/label";
import { Input } from "@/components/ui/input/input";
import DefaultForm from "./components/defaultForm";
import { useForm } from "react-hook-form";
import { useAuth } from "./components/authProvider";

export default function RegisterIndividual() {
  const { getClubs, handleRegister, loading } = useAuth();
  // const { handleRegister, loading } = useAuth();
  // const [clubs, setClubs] = useState([]);

  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isSubmitting,
    }
  } = useForm();

  const handleSignup = (data) => {
    handleRegister({
      ...data,
      affiliation_Number: "123456",
      clubID: 1,
      rolesId: 3,
      divisionsId: 1,
    });
  };

  // useEffect(async () => {
  //   const clubsList = await getClubs();
  //   console.log(clubsList);
  //   setClubs(clubsList);
  // }, []);

  return (
    <DefaultForm
      onSubmit={handleSubmit(handleSignup)}
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
        <LabelInputContainer>
          <Label htmlFor="username">Username</Label>
          <Input
            id="username"
            placeholder="Johnarcher123"
            type="text"
            {...register("userName", {
              required: "Username is required",
            })}
            disabled={isSubmitting || loading}
          />
        </LabelInputContainer>
      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
        <LabelInputContainer>
          <Label htmlFor="firstname">First Name</Label>
          <Input
            id="firstname"
            placeholder="John"
            type="text"
            {...register("firstName", {
              required: "First name is required",
            })}
            disabled={isSubmitting || loading}
          />
        </LabelInputContainer>
        <LabelInputContainer>
          <Label htmlFor="lastname">Last Name</Label>
          <Input
            id="lastname"
            placeholder="Johnson"
            type="text"
            {...register("lastName", {
              required: "Last name is required",
            })}
            disabled={isSubmitting || loading}
          />
        </LabelInputContainer>
      </div>
      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
        <LabelInputContainer>
          <Label htmlFor="gender">Gender</Label>
          <Input
            id="gender"
            placeholder="Male"
            type="text"
            {...register("gender", {
              required: "Gender is required",
            })}
            disabled={isSubmitting || loading}
          />
        </LabelInputContainer>
        <LabelInputContainer>
          <Label htmlFor="dob">Date of Birth</Label>
          <Input
            id="dob"
            placeholder="projectmayhem@fc.com"
            type="date"
            {...register("dob", {
              required: "Date of birthday is required",
            })}
            disabled={isSubmitting || loading}
          />
        </LabelInputContainer>
      </div>
      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
        <LabelInputContainer>
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            placeholder="12 345 6789"
            type="tel"
            {...register("phone", {
              required: "Phone number is required",
              pattern: "[0-9]{3}-[0-9]{3}-[0-9]{4}"
            })}
            disabled={isSubmitting || loading}
          />
        </LabelInputContainer>
        <LabelInputContainer>
          <Label htmlFor="emergency">Emergency Contact</Label>
          <Input
            id="emergency"
            placeholder="12 345 6789"
            type="tel"
            {...register("emergency_Contact", {
              required: "Emergency contact is required",
              pattern: "[0-9]{3}-[0-9]{3}-[0-9]{4}"
            })}
            disabled={isSubmitting || loading}
          />
        </LabelInputContainer>
      </div>
      <LabelInputContainer>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          placeholder="archer@archery.com"
          type="email"
          {...register("email", {
            required: "Email is required",
          })}
          disabled={isSubmitting || loading}
        />
      </LabelInputContainer>
      <LabelInputContainer>
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          placeholder="••••••••"
          type="password"
          {...register("password", {
            required: "Password is required",
          })}
          disabled={isSubmitting || loading}
        />
      </LabelInputContainer>
      <LabelInputContainer>
        <Label htmlFor="confirmpassword">Confirm password</Label>
        <Input
          id="confirmpassword"
          placeholder="••••••••"
          type="password"
          {...register("password", {
            required: "Password is required",
          })}
          disabled={isSubmitting || loading}
        />
      </LabelInputContainer>
    </DefaultForm>
  );
}
