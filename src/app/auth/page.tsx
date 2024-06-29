"use client";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Icons } from "@/components/icons";
import { useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";

type LoadingStates = {
  isLoadingEmail?: boolean;
  isLoadingGoogle?: boolean;
  isLoadingDiscord?: boolean;
};
export default function SignIn() {
  const router = useRouter();
  const supabase = createClient();

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
    // After 5 seconds, set all loading states back to false
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

    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      console.log("Login successful");
      void router.push("/dashboard");
    } else {
      console.log("Login failed");
    }
  }

  // Social login functions
  async function signInWithGoogle() {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
    void router.push("/dashboard");
    if (error) console.error("Google login failed", error.message);
  }

  async function signInWithDiscord() {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "discord",
    });
    void router.push("/dashboard");
    if (error) console.error("Discord login failed", error.message);
  }

  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex items-center justify-center py-12">
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
            <Button
              variant="outline"
              type="button"
              onClick={() => {
                setLoadingState({ isLoadingGoogle: true });
                signInWithGoogle;
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
                signInWithDiscord;
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
      <div className="hidden bg-muted lg:block">
        <Image
          src="/placeholder.svg"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
