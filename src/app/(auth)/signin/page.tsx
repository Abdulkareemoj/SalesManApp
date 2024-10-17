"use client";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  loginWithPassword,
  loginWithGoogle,
  loginWithGithub,
} from "../actions";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Icons } from "@/components/icons";

type LoadingStates = {
  isLoadingEmail?: boolean;
  isLoadingGoogle?: boolean;
  isLoadingGithub?: boolean;
};

export default function LoginPage() {
  const router = useRouter();
  const [loadingStates, setLoading] = useState<LoadingStates>({
    isLoadingEmail: false,
    isLoadingGoogle: false,
    isLoadingGithub: false,
  });

  const setLoadingState = (obj: Partial<LoadingStates>) => {
    setLoading((prev) => ({ ...prev, ...obj }));
    setTimeout(
      () =>
        setLoading({
          isLoadingEmail: false,
          isLoadingGoogle: false,
          isLoadingGithub: false,
        }),
      3000
    );
  };

  const isAnyLoading = () => Object.values(loadingStates).some(Boolean);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoadingState({ isLoadingEmail: true });
    const formData = new FormData(event.currentTarget);

    try {
      await loginWithPassword(formData);
      router.push("/dashboard");
    } catch (error) {
      console.error("Login failed", error);
    }

    setLoadingState({ isLoadingEmail: false });
  };

  const handleGoogleSignIn = async () => {
    setLoadingState({ isLoadingGoogle: true });
    try {
      await loginWithGoogle();
      router.push("/dashboard");
    } catch (error) {
      console.error("Google login failed", error);
    }
    setLoadingState({ isLoadingGoogle: false });
  };

  const handleGithubSignIn = async () => {
    setLoadingState({ isLoadingGithub: true });
    try {
      await loginWithGithub();
      router.push("/dashboard");
    } catch (error) {
      console.error("GitHub login failed", error);
    }
    setLoadingState({ isLoadingGithub: false });
  };
  const metadata: Metadata = {
    title: "Authentication",
    description: "Authentication forms built using the components.",
  };

  return (
    <>
      <div className="md:hidden">
        <Image
          src="/examples/authentication-light.png"
          width={1280}
          height={843}
          alt="Authentication"
          className="block dark:hidden"
        />
        <Image
          src="/examples/authentication-dark.png"
          width={1280}
          height={843}
          alt="Authentication"
          className="hidden dark:block"
        />
      </div>
      <div className="container relative hidden h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="absolute inset-0 bg-zinc-900" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-6 w-6"
            >
              <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
            </svg>
            Acme Inc
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;This library has saved me countless hours of work and
                helped me deliver stunning designs to my clients faster than
                ever before.&rdquo;
              </p>
              <footer className="text-sm">Sofia Davis</footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Create an account
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your email below to create your account
              </p>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <div className="w-full max-w-[350px] space-y-6">
                <div className="space-y-2 text-center">
                  <h1 className="text-3xl font-bold">Login</h1>
                  <p className="text-muted-foreground">
                    Enter your email below to login to your account
                  </p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" required />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Label htmlFor="password">Password</Label>
                      <Link
                        href="/forgot-password"
                        className="ml-auto text-sm underline"
                      >
                        Forgot your password?
                      </Link>
                    </div>
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      required
                    />
                  </div>
                  <div className="flex gap-4">
                    <Button
                      type="submit"
                      className="flex-1"
                      disabled={isAnyLoading()}
                    >
                      {loadingStates.isLoadingEmail ? (
                        <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                      ) : null}
                      Log in
                    </Button>
                  </div>
                </form>
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">
                      Or continue with
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Button
                    variant="outline"
                    onClick={handleGoogleSignIn}
                    disabled={isAnyLoading()}
                  >
                    {loadingStates.isLoadingGoogle ? (
                      <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                      <Icons.google className="mr-2 h-4 w-4" />
                    )}
                    Google
                  </Button>
                  <Button
                    variant="outline"
                    onClick={handleGithubSignIn}
                    disabled={isAnyLoading()}
                  >
                    {loadingStates.isLoadingGithub ? (
                      <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                      <Icons.gitHub className="mr-2 h-4 w-4" />
                    )}
                    GitHub
                  </Button>
                </div>
              </div>
            </div>
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{" "}
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
