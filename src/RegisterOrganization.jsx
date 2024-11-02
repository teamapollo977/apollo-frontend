import React from "react";
import { useSearchParams } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { useAuth } from "./components/authProvider";

import { Label, LabelInputContainer } from "@/components/ui/input/label";
import { Input } from "@/components/ui/input/input";
import DefaultForm from "./components/defaultForm";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectGroup,
  SelectLabel,
  SelectValue,
} from "@/components/ui/select"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import { useEffect } from "react";

export default function RegisterOrganization() {
  // const { password, setPassword } = React.useState("");
  // const { confirmPassword, setConfirmPassword } = React.useState("");
  const { getClubs, handleRegisterClub, loading } = useAuth();
  const [urlParams] = useSearchParams();

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: {
      errors,
      isSubmitting,
    }
  } = useForm();

  const handleSignup = (data) => {
    handleRegisterClub(data, data.otp, data.otp_email);
  };

  useEffect(() => {
    reset({
      otp: urlParams.get("otp"),
      otp_email: urlParams.get("email"),
    }, { keepDefaultValues: true });
  }, [urlParams]);

  return (
    <DefaultForm
      onSubmit={handleSubmit(handleSignup)}
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

      <div className="flex flex-col gap-4">
        <span className="text-lg font-semibold">One-Time Password</span>
        <LabelInputContainer>
          <Label htmlFor="otp">OTP Code</Label>
          <Controller
            name="otp"
            control={control}
            required="One-Time Password is required"
            render={({ field }) => (
              <InputOTP
                maxLength={6}
                {...field}
                ref={null}
                onChange={(value) => field.onChange(value)}
                id="otp"
                disabled={isSubmitting || loading}
              >
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
            )}
          />
        </LabelInputContainer>
        <LabelInputContainer>
          <Label htmlFor="otp_email">OTP Email</Label>
          <Input
            id="otp_email"
            placeholder="archer@archery.com"
            type="text"
            {...register("otp_email", {
              required: "OTP Email is required",
            })}
            disabled={isSubmitting || loading}
          />
        </LabelInputContainer>
      </div>

      <div className="flex flex-col gap-4 mt-6">
        <span className="text-lg font-semibold">Club</span>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
          <LabelInputContainer>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              placeholder="Deep South Archery Club"
              type="text"
              {...register("name", {
                required: "Name is required",
              })}
              disabled={isSubmitting || loading}
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="affiliation_Name">Affiliation Name</Label>
            <Input
              id="affiliation_Name"
              placeholder="Archery New Zealand"
              type="text"
              {...register("affiliation_Name", {
                required: "Affiliation name is required",
              })}
              disabled={isSubmitting || loading}
            />
          </LabelInputContainer>
        </div>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
          <LabelInputContainer>
            <Label htmlFor="district">District</Label>
            <Input
              id="district"
              placeholder="Southland"
              type="text"
              {...register("district", {
                required: "District is required",
              })}
              disabled={isSubmitting || loading}
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="location">City</Label>
            <Input
              id="location"
              placeholder="Invercargill"
              type="text"
              {...register("location", {
                required: "City is required",
              })}
              disabled={isSubmitting || loading}
            />
          </LabelInputContainer>
        </div>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
          <LabelInputContainer>
            <Label htmlFor="genUserPassword">Club Members Code</Label>
            <Input
              id="genUserPassword"
              placeholder="SecretMemberCode123"
              type="text"
              {...register("genUserPassword", {
                required: "Club members code is required",
              })}
              disabled={isSubmitting || loading}
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="presidentPassword">Club President Code</Label>
            <Input
              id="presidentPassword"
              placeholder="SecretPresidentCode"
              type="text"
              {...register("presidentPassword", {
                required: "Club president code is required",
              })}
              disabled={isSubmitting || loading}
            />
          </LabelInputContainer>
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-6">
        <span className="text-lg font-semibold">Club President</span>
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
            <Controller
              name="gender"
              control={control}
              required="Gender is required"
              render={({ field }) => (
                <Select
                  {...field}
                  ref={null}
                  onValueChange={(value) => field.onChange(value)}
                  id="gender"
                  disabled={isSubmitting || loading}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a gender"/>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Male">Male</SelectItem>
                    <SelectItem value="Female">Female</SelectItem>
                  </SelectContent>
                </Select>
              )}
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
          <Label htmlFor="Shooting_Style">Bow Style</Label>
          <Controller
            name="Shooting_Style"
            control={control}
            required="Bow style is required"
            render={({ field }) => (
              <Select
                id="Shooting_Style"
                {...field}
                ref={null}
                onValueChange={(value) => field.onChange(value)}
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a bow type"/>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup label="Barebow">
                    <SelectLabel>Barebow</SelectLabel>
                    <SelectItem value="Barebow-Recurve">Barebow Recurve</SelectItem>
                    <SelectItem value="Barebow-Compound">Barebow Compound</SelectItem>
                  </SelectGroup>
                  <SelectGroup label="Freestyle">
                    <SelectLabel>Freestyle</SelectLabel>
                    <SelectItem value="Freestyle-Limited-Recurve">Freestyle Limited Recurve</SelectItem>
                    <SelectItem value="Freestyle-Limited-Compound">Freestyle Limited Compound</SelectItem>
                    <SelectItem value="Freestyle-Unlimited">Freestyle Unlimited</SelectItem>
                  </SelectGroup>
                  <SelectGroup label="Bowhunter">
                    <SelectLabel>Bowhunter</SelectLabel>
                    <SelectItem value="Bowhunter-Recurve">Bowhunter Recurve</SelectItem>
                    <SelectItem value="Bowhunter-Compound">Bowhunter Compound</SelectItem>
                    <SelectItem value="Bowhunter-Limited">Bowhunter Limited</SelectItem>
                    <SelectItem value="Bowhunter-Unlimited">Bowhunter Unlimited</SelectItem>
                  </SelectGroup>
                  <SelectGroup label="Professional">
                    <SelectLabel>Professinal</SelectLabel>
                    <SelectItem value="Professional-Unlimited">Professional Unlimited</SelectItem>
                    <SelectItem value="Professional-Limited-recurve">Professional Limited Recurve</SelectItem>
                    <SelectItem value="Professional-Limited-compound">Professional Limited Compound</SelectItem>
                  </SelectGroup>
                  <SelectGroup label="Others">
                    <SelectLabel>Others</SelectLabel>
                    <SelectItem value="Traditional-Recurve-bow">Traditional Recurve Bow</SelectItem>
                    <SelectItem value="Longbow">Longbow</SelectItem>
                    <SelectItem value="Historical-bow">Historical Bow</SelectItem>
                    <SelectItem value="Novice">Novice</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            )}
          />

        </LabelInputContainer>

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
          <Label htmlFor="affiliation_Number">Affiliation Number</Label>
          <Input
            id="affiliation_Number"
            placeholder="12345"
            type="text"
            {...register("affiliation_Number", {
              required: "Affiliation number is required",
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
            {...register("confirmpassword", {
              required: "Confirm password has to be the same as Password field",
            })}
            disabled={isSubmitting || loading}
          />
        </LabelInputContainer>
      </div>
    </DefaultForm>
  );
}
