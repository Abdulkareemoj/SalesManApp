"use client";
import Image from "next/image";
import Link from "next/link";

import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Icons } from "@/components/icons";
import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";

type LoadingStates = {
  isLoadingEmail?: boolean;
  isLoadingGoogle?: boolean;
  isLoadingDiscord?: boolean;
};
export default function SignIn() {
  const client = createClient();
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/dashboard");
    }
  }, [isAuthenticated]);

  const [loadingStates, setLoading] = useState<LoadingStates>({
    isLoadingGoogle: false,
    isLoadingDiscord: false,
    isLoadingEmail: false,
  });

  function setLoadingState(obj: typeof loadingStates) {
    setLoading((prev) => ({
      ...prev,
      ...obj,
    }));
    // After 3 seconds, set all loading states back to false
    setTimeout(() => {
      setLoading({
        isLoadingGoogle: false,
        isLoadingDiscord: false,
        isLoadingEmail: false,
      });
    }, 3000);
  }

  function isAnyLoading(): boolean {
    return (
      loadingStates.isLoadingDiscord ||
      loadingStates.isLoadingGoogle ||
      loadingStates.isLoadingEmail ||
      false
    );
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      email: { value: string };
      password: { value: string };
    };
    const email = target.email.value;
    const password = target.password.value;

    const { error } = await client.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      console.log("Login successful");
      if (!error) {
        setIsAuthenticated(true); // Update state to indicate successful authentication
      } else {
        console.log("Login failed");
      }
    }
  }
  // Social login functions
  async function signInWithGoogle() {
    const { error } = await client.auth.signInWithOAuth({
      provider: "google",
    });
    if (!error) {
      setIsAuthenticated(true); // Update state to indicate successful authentication
    } else {
      if (error) console.error("Google login failed", error.message);
    }
  }
  async function signInWithGithub() {
    const { error } = await client.auth.signInWithOAuth({
      provider: "github",
    });
    if (!error) {
      setIsAuthenticated(true); // Update state to indicate successful authentication
    } else {
      if (error) console.error("Discord login failed", error.message);
    }
  }

  return (
    <main className="flex w-full h-screen">
      <div className="hidden sm:block md:flex md:flex-1">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r ">
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
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-center h-screen">
          <div className="mx-auto grid w-[350px] gap-6">
            <div className="grid gap-2 text-center">
              <h1 className="text-3xl font-bold">Login</h1>
              <p className="text-balance text-muted-foreground">
                Enter your email below to login to your account
              </p>
            </div>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <Link
                    href="/forgot-password"
                    className="ml-auto inline-block text-sm underline"
                  >
                    Forgot your password?
                  </Link>
                </div>
                <Input id="password" type="password" required />
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
              <div className="text-center">Or</div>
              <Button
                variant="outline"
                type="button"
                onClick={() => {
                  setLoadingState({ isLoadingGoogle: true });
                  signInWithGoogle();
                }}
                disabled={isAnyLoading()}
              >
                {loadingStates.isLoadingGoogle ? (
                  <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Icons.google className="mr-2 h-4 w-4" />
                )}{" "}
                Google
              </Button>

              <Button
                variant="outline"
                type="button"
                onClick={() => {
                  setLoadingState({ isLoadingDiscord: true });
                  signInWithGithub();
                }}
                disabled={isAnyLoading()}
              >
                {loadingStates.isLoadingDiscord ? (
                  <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Icons.gitHub className="mr-2 h-4 w-4" />
                )}{" "}
                Github
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
