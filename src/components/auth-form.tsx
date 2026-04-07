"use client";
import MaxWidthWrapper from "./max-width-wrapper";
import { Form } from "./ui/form";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  signInSchema,
  signUpSchema,
  signInFormSchemaType,
  signUpFormSchemaType,
} from "../lib/validations";
import Image from "next/image";
import { CustomInput } from "./customs";
import { Button } from "./ui/button";
import { signIn, signUp } from "@/lib/actions/auth";
import { handleErrors } from "@/lib/utils";
import { useRouter } from "next/navigation";
import Spinner from "./spinner";

type AuthType = {
  type: "SignIn" | "SignUp";
};
const AuthForm = ({ type }: AuthType) => {
  const initial =
    type === "SignIn"
      ? { email: "", password: "" }
      : { name: "", email: "", password: "" };

  const Schema = type === "SignIn" ? signInSchema : signUpSchema;

  const form = useForm<signInFormSchemaType | signUpFormSchemaType>({
    defaultValues: initial,
    resolver: zodResolver(Schema),
  });

  const isSubmitting = form.formState.isSubmitting;

  const router = useRouter();
  async function onSubmit(data: signInFormSchemaType | signUpFormSchemaType) {
    try {
      if (type === "SignUp") {
        const res = await signUp(data as signUpFormSchemaType);

        if (!res?.error) {
          router.replace("/auth/sign-in");
        }
      } else {
        const res = await signIn(data as signInFormSchemaType);
        if (!res?.error) {
          console.log(res?.error);
          router.replace("/");
        }
      }
    } catch (error) {
      handleErrors(error);
    }
  }
  return (
    <section className="h-screen size-full relative flex items-center justify-center">
      {/* LEFT */}
      <Image
        src={"/assets/images/bg.jpg"}
        alt="banner"
        className="object-cover"
        fill
        sizes="100vw"
      />

      {/* RIGHT */}
      <MaxWidthWrapper className="absolute flex flex-col justify-center size-full z-10 bg-white/90 max-w-prose">
        <Form {...form}>
          <h1 className="text-3xl font-bold text-center mb-8 text-accent-foreground">
            {type === "SignUp"
              ? "Create A New Account"
              : "Sign In To Your Account"}
          </h1>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 px-4 py-12 bg-app-blue/5 rounded-md"
          >
            {type === "SignUp" && (
              <CustomInput
                control={form.control}
                name="name"
                label="Full Name"
                isRequired
                placeholder="Johnson Amadike"
              />
            )}
            <CustomInput
              control={form.control}
              type="email"
              name="email"
              label="Email"
              isRequired
              placeholder="youremail@email.com"
            />
            <CustomInput
              control={form.control}
              name="password"
              label="Password"
              isRequired
              type="password"
              placeholder="Password"
            />

            <Button
              className={
                "bg-app-blue bg-app-dark-gold text-white hover:bg-app-brown text-sm cursor-pointer py-4 rounded-full w-full"
              }
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <Spinner />
              ) : (
                <p>{type === "SignUp" ? "Sign Up" : "Sign In"}</p>
              )}
            </Button>
          </form>
        </Form>
      </MaxWidthWrapper>
    </section>
  );
};

export default AuthForm;
