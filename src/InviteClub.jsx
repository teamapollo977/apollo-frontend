import React, { useEffect } from "react";
import { Label, LabelInputContainer } from "@/components/ui/input/label";
import { Input } from "@/components/ui/input/input";
import DefaultForm from "./components/defaultForm";
import { useForm } from "react-hook-form";
import { useAuth } from "./components/authProvider";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "sonner";

export default function InviteClub() {
  const { authToken } = useAuth();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isSubmitting,
    }
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    await fetch(import.meta.env.VITE_API_URL + "/api/Auth/SendOtpToUser/send-otp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${authToken}`,
      },
      body: JSON.stringify(data),
    }).then((response) => {
      if (response.ok) toast.success("OTP sent successfully");
    }).catch((error) => {
      toast.error("There was an error sending the OTP. Please try again.");
    }).finally(() => {
      setLoading(false);
    });
  };

  return (
    <DefaultForm
      onSubmit={handleSubmit(onSubmit)}
      isSubmitting={isSubmitting || loading}
      title="Invite Club"
      submitText={isSubmitting || loading ? "Loading..." : "Submit"}
      redirects={[
        {
          text: "Invite a club to join Apollo Archery",
        }
      ]}
    >
      <LabelInputContainer>
        <Label htmlFor="email">Email</Label>
        <Input
          {...register("email", {
            required: "Email is required",
          })}
          id="email"
          placeholder="deepsouth@archery.com"
          type="email"
          disabled={isSubmitting || loading}
        />
        {errors.email && <p className="text-accent text-sm">{errors.email.message}</p>}
      </LabelInputContainer>
    </DefaultForm>
  );
}
