import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Label, LabelInputContainer } from "@/components/ui/input/label";
import { Input } from "@/components/ui/input/input";
import DefaultForm from "./components/defaultForm";
import { useForm } from "react-hook-form";

export default function Signin() {

  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isSubmitting,
    }
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    fetch(import.meta.env.VITE_API_URL + "/api/Auth/Login", {
      method: "POST",
      headers: {
        "access-control-allow-origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => {
        if (response.ok) {
          console.log("Success");
          return response.json();
        } else {
          console.log("Failed");
          throw new Error("Failed to login");
        }}).then((data) => {
        console.log(data);
        sessionStorage.setItem("token", data.token);
        sessionStorage.setItem("userRole", data.userRole);
      }).catch((error) => {
        console.error(error);
      })
  };

  // const {data, isLoading} = useQuery({
  //   queryKey: "login",
  //   queryFn: async () => {
  //     const response = await fetch("/api/login");
  //   },
  // });

  return (
    <DefaultForm
      onSubmit={handleSubmit(onSubmit)}
      isSubmitting={isSubmitting}
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
        <Label htmlFor="username">Username</Label>
        <Input
          {...register("userName", {
            required: "Username is required",
          })}
          id="username"
          placeholder="awesomearcher123"
          type="text"
        />
        {errors.email && <p className="text-accent text-sm">{errors.email.message}</p>}
      </LabelInputContainer>
      <LabelInputContainer>
        <Label htmlFor="password">Password</Label>
        <Input
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 4,
              message: "Password must be at least 8 characters",
            }
          })}
          id="password"
          placeholder="••••••••••••"
          type="password"
        />
        {errors.password && <p className="text-accent text-sm">{errors.password.message}</p>}
      </LabelInputContainer>
    </DefaultForm>
  );
}
