"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  loginWithPassword,
  loginWithGoogle,
  loginWithGithub,
} from "../actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Icons } from "@/components/icons";

type LoadingStates = {
  isLoadingEmail: boolean;
  isLoadingGoogle: boolean;
  isLoadingGithub: boolean;
};

export default function LoginPage() {
  const router = useRouter();
  const [loadingStates, setLoading] = useState<LoadingStates>({
    isLoadingEmail: false,
    isLoadingGoogle: false,
    isLoadingGithub: false,
  });
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const setLoadingState = (obj: Partial<LoadingStates>) => {
    setLoading((prev) => ({ ...prev, ...obj }));
  };

  const isAnyLoading = () => Object.values(loadingStates).some(Boolean);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage(null);
    setLoadingState({ isLoadingEmail: true });
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      const { error } = await loginWithPassword({ email, password });
      if (error) {
        throw error;
      }
      router.push("/dashboard");
    } catch (error) {
      console.error("Login failed", error);
      setErrorMessage("Invalid login credentials. Please try again.");
    } finally {
      setLoadingState({ isLoadingEmail: false });
    }
  };
  const handleGoogleSignIn = async () => {
    setErrorMessage(null);
    setLoadingState({ isLoadingGoogle: true });
    try {
      const { url, error } = await loginWithGoogle();
      if (error) {
        throw new Error(error);
      }
      if (url) {
        window.location.href = url; // Redirect to the OAuth provider
      }
    } catch (error) {
      console.error("Google login failed", error);
      setErrorMessage("Google login failed. Please try again.");
    } finally {
      setLoadingState({ isLoadingGoogle: false });
    }
  };

  const handleGithubSignIn = async () => {
    setErrorMessage(null);
    setLoadingState({ isLoadingGithub: true });
    try {
      const { url, error } = await loginWithGithub();
      if (error) {
        throw new Error(error);
      }
      if (url) {
        window.location.href = url; // Redirect to the OAuth provider
      }
    } catch (error) {
      console.error("GitHub login failed", error);
      setErrorMessage("GitHub login failed. Please try again.");
    } finally {
      setLoadingState({ isLoadingGithub: false });
    }
  };

  return (
    <>
      <div className="container relative min-h-screen flex flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
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

        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-[350px] space-y-6">
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold">Login</h1>
              <p className="text-muted-foreground">
                Enter your email below to login to your account
              </p>
            </div>
            {errorMessage && (
              <div className="text-red-500 text-center">{errorMessage}</div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" required />
              </div>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <Link
                    href="/auth/forgot-password"
                    className="ml-auto text-sm underline"
                  >
                    Forgot your password?
                  </Link>
                </div>
                <Input id="password" name="password" type="password" required />
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
      </div>
    </>
  );
}
