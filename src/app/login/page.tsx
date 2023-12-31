import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { useState } from "react";
import { Icons } from "@/components/icons";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { headers, cookies } from "next/headers";

export default function LoginServer({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  // email password
  const signIn = async (formData: FormData) => {
    "use server";

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return redirect("/login?message=Could not authenticate user");
    } else if (data?.user) {
      // Redirect to the Dashboard route
      return redirect("/dashboard");
    }
  };

  // magiclink
  const handleEmailLogin = async (formData: FormData) => {
    "use server";

    try {
      const email = formData.get("email") as string;
      const cookieStore = cookies();
      const supabase = createClient(cookieStore);
      const { error } = await supabase.auth.signInWithOtp({ email });
      if (error) {
        throw new Error(error.message);
      } else {
        alert("check your email for the login link");
      }
    } catch (error) {
      console.error(error);
      // Handle the error appropriately
    }
  };

  // oauth
  const handleGmailLogin = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    "use server";

    try {
      const cookieStore = cookies();
      const supabase = createClient(cookieStore);
      const {
        data: { url },
        error,
      } = await supabase.auth.signInWithOAuth({
        provider: "google",
      });
      if (error) {
        return redirect("/login?message=Could not authenticate user");
      } else {
        return redirect("/dashboard");
      }
    } catch (error) {
      console.error(error);
      // Handle the error appropriately
    }
  };

  const [isLoginLoading, setIsLoginLoading] = useState(false);
  const [gmailLoading, setGmailLoading] = useState(false);
  const [magicLoading, setMagicLoading] = useState(false);
  // const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Handle form submission
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoginLoading(true);
    const formData = new FormData(event.currentTarget);
    await signIn(formData);
    setIsLoginLoading(false);
  };

  const handleMagicSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMagicLoading(true);
    const formData = new FormData(event.currentTarget);
    await handleEmailLogin(formData);
    setMagicLoading(false);
  };

  return (
    <div>
      <div className="container relative hidden h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <Button
          type="submit"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "absolute right-4 top-4 md:right-8 md:top-8"
          )}
        >
          Button
        </Button>
        {/*  */}

        {/*  */}
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
        {/*  */}

        {/* Username Password */}
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Enter Your Details{" "}
              </h1>
              <p className="text-sm text-muted-foreground">ACME Company </p>
            </div>
            <div className="grid gap-6">
              <form onSubmit={handleSubmit}>
                <div className="grid gap-2">
                  <div className="grid gap-1">
                    <Label className="sr-only" htmlFor="email">
                      Email
                    </Label>
                    <Input
                      id="email"
                      placeholder="username"
                      type="email"
                      autoCapitalize="none"
                      autoComplete="email"
                      autoCorrect="off"
                      disabled={isLoginLoading}
                      required
                    />
                  </div>
                  <div className="grid gap-1">
                    <Label className="sr-only" htmlFor="password">
                      Password
                    </Label>
                    <Input
                      id="password"
                      placeholder="password"
                      type="password"
                      autoCapitalize="none"
                      autoComplete="password"
                      autoCorrect="off"
                      disabled={isLoginLoading}
                      required
                    />
                  </div>
                  <Button type="submit" disabled={isLoginLoading}>
                    {isLoginLoading && (
                      <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                    )}
                    Sign In
                  </Button>
                  {/* <span className="alert alert-danger" role="alert">
                    {errorMsg}
                  </span> */}
                </div>
              </form>
              {/* End */}

              {/* Gmail Login  */}
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
              <Button
                onClick={handleGmailLogin}
                variant="outline"
                type="button"
                disabled={gmailLoading}
              >
                {gmailLoading ? (
                  <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Icons.google className="mr-2 h-4 w-4" />
                )}{" "}
                Google
              </Button>
              {/* End */}

              {/* Magic Link */}
              <form onSubmit={handleMagicSubmit}>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2  text-muted-foreground">
                    Alternatively, Get a link to login
                  </span>
                </div>

                <div className="grid gap-2 py-2">
                  <Label className="sr-only" htmlFor="email">
                    Email
                  </Label>
                  <Input
                    id="email"
                    placeholder="name@example.com"
                    type="email"
                    autoCapitalize="none"
                    autoComplete="email"
                    autoCorrect="off"
                    disabled={magicLoading}
                    required
                  />
                  <Button type="submit" disabled={magicLoading}>
                    {magicLoading && (
                      <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                    )}
                    Send Magic Link
                  </Button>
                </div>
              </form>
              {/* End */}
            </div>
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our
              <a
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </a>
              and
              <a
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </a>
              .
            </p>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
