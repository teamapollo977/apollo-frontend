import React, { useState, useEffect } from "react";
import { Label, LabelInputContainer } from "@/components/ui/input/label";
import { Input } from "@/components/ui/input/input";
import DefaultForm from "./components/defaultForm";
import { useForm, Controller } from "react-hook-form";
import { useAuth } from "./components/authProvider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectGroup,
  SelectLabel,
  SelectValue,
} from "@/components/ui/select"

export default function RegisterIndividual() {
  const { handleRegister, loading } = useAuth();
  const [loadingClubs, setLoadingClubs] = useState(true);
  const [clubs, setClubs] = useState([]);

  const {
    register,
    control,
    handleSubmit,
    formState: {
      errors,
      isSubmitting,
    }
  } = useForm();

  const handleSignup = (data) => {
    handleRegister(data);
  };

  const getClubs = async () => {
    fetch(import.meta.env.VITE_API_URL + "/api/Club", {
      method: "GET",
      headers: {
        "access-control-allow-origin": "*",
        "Content-Type": "application",
      },
    }).then((response) => {
        return response.json();
      }).then((data) => {
        setClubs(data);
      }).catch((error) => {
        throw new Error("Failed to get clubs");
      }).finally(() => {
        setLoadingClubs(false);
      })
  };

  useEffect(() => {
    getClubs();
  }, []);

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

        {/*
        <LabelInputContainer>
          <Label htmlFor="gender">Gender</Label>
          <Select
            onValueChange={(value) => field.onChange(value)}
            id="gender"
            disabled={isSubmitting || loading}
            required="Gender is required"
          >
            <Controller
              control={control}
              name="gender"
              render={({ field }) => (
                <>
                  <SelectTrigger
                    {...field}
                  >
                    <SelectValue placeholder="Select a gender"/>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Male">Male</SelectItem>
                    <SelectItem value="Female">Female</SelectItem>
                  </SelectContent>
                </>
              )}
            />
          </Select>
        </LabelInputContainer>
        */}

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
        <Label htmlFor="club_name">Club</Label>
        <Controller
          name="club_name"
          control={control}
          required="Club is required"
          render={({ field }) => (
            <Select
              id="club_name"
              {...field}
              ref={null}
              onValueChange={(value) => field.onChange(value)}
              required
              disabled={loadingClubs}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a Club"/>
              </SelectTrigger>
              <SelectContent>
                {clubs.map((club) => (
                  <SelectItem key={club.id} value={club.name}>{club.name}</SelectItem>
                ))}
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
      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
      <LabelInputContainer>
        <Label htmlFor="clubPassword">Club Code</Label>
        <Input
          id="clubPassword"
          placeholder="secretclubcode"
          type="text"
          {...register("clubPassword", {
            required: "clubPassword is required",
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
      </div>
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
            required: "Password is required",
          })}
          disabled={isSubmitting || loading}
        />
      </LabelInputContainer>
    </DefaultForm>
  );
}
