import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Label, LabelInputContainer } from "@/components/ui/input/label";
import { Input } from "@/components/ui/input/input";
import DefaultForm from "./components/defaultForm";
import { useForm } from "react-hook-form";
import { useAuth } from "./components/authProvider";
import { useNavigate } from "react-router-dom";

export default function Signin() {
  const { handleLogin, loading, isLogged } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isSubmitting,
    }
  } = useForm();

  // useEffect(() => {
  //   console.log("Loading: " + loading);
  // }, [loading]);
  //
  // useEffect(() => {
  //   console.log("isSubmitting: " + isSubmitting);
  // }, [isSubmitting]);
  //
  const onSubmit = async (data) => {
    await handleLogin(data);
    if (isLogged) {
      navigate("/dashboard");
    }
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
      isSubmitting={isSubmitting || loading}
      title="Sign in"
      submitText={isSubmitting || loading ? "Loading..." : "Sign in"}
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
          disabled={isSubmitting || loading}
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
          disabled={isSubmitting || loading}
        />
        {errors.password && <p className="text-accent text-sm">{errors.password.message}</p>}
      </LabelInputContainer>
    </DefaultForm>
  );
}
