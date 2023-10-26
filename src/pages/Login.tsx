import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
// import { UserAuthForm } from "@/components/auth-form";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/authProvider";
import { Icons } from "@/components/icons";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { supabase } from "@/config/supabaseClient";

// interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

// export default function Login({ className, ...props }: UserAuthFormProps) {
//   const [isLoading, setIsLoading] = React.useState<boolean>(false);

//   async function onSubmit(event: React.SyntheticEvent) {
//     event.preventDefault();
//     setIsLoading(true);

//     setTimeout(() => {
//       setIsLoading(false);
//     }, 3000);
//   }

// interface LoginProps {
//   onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
// }

// const Login = ({ onSubmit }: LoginProps) => {
export default function Login() {
  const [email, setEmail] = useState("");
  const [magicEmail, setMagicEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();
  const [isLoginLoading, setIsLoginLoading] = useState(false);
  const [gmailLoading, setGmailLoading] = useState(false);
  const [magicLoading, setMagicLoading] = useState(false);

  const handleEmailLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMagicLoading(true);
    const { error } = await supabase.auth.signInWithOtp({ email });
    if (error) {
      alert(error.message);
    } else alert("check your email for the login link");
  };

  const handleGmailLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setGmailLoading(true);
    if (error) {
      alert(error.message);
    } else alert("check your email for the login link");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoginLoading(true); // set isLoading to true when the form is submitted
    try {
      setErrorMsg("");

      if (!password.current?.value || !email.current?.value) {
        setErrorMsg("Please fill in the fields");
        setIsLoginLoading(false); // set isLoading to false if there is an error
        return;
      }
      const {
        data: { user, session },
        error,
      } = await login(email.current.value, password.current.value);
      if (error) setErrorMsg(error.message);
      if (user && session) navigate("/");
    } catch (error) {
      setErrorMsg("Email or Password Incorrect");
    }
    setIsLoginLoading(false); // set isLoading to false after the form submission is complete
  };

  const handleButtonClick = () => {
    // call the handleSubmit function when the button is clicked
    handleSubmit(
      new Event("submit") as unknown as React.FormEvent<HTMLFormElement>
    );
  };

  const handleGmailButtonClick = () => {
    // call the handleSubmit function when the button is clicked
    handleGmailLogin(
      new Event("submit") as unknown as React.FormEvent<HTMLFormElement>
    );
  };

  const handleMagicButtonClick = () => {
    // call the handleSubmit function when the button is clicked
    handleEmailLogin(
      new Event("submit") as unknown as React.FormEvent<HTMLFormElement>
    );
  };

  return (
    <>
      {/*  */}
      <div className="md:hidden">
        <img
          src="authentication-light.png"
          width={1280}
          height={843}
          alt="Authentication"
          className="block dark:hidden"
        />
        <img
          src="authentication-dark.png"
          width={1280}
          height={843}
          alt="Authentication"
          className="hidden dark:block"
        />
      </div>
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

        {/* Email Password */}
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
                      placeholder="name@example.com"
                      type="email"
                      autoCapitalize="none"
                      autoComplete="email"
                      autoCorrect="off"
                      value={email}
                      disabled={isLoginLoading}
                      required={true}
                      onChange={(event) => setEmail(event.target.value)}
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
                      value={password}
                      disabled={isLoginLoading}
                      required={true}
                      onChange={(event) => setPassword(event.target.value)}
                    />
                  </div>
                  <Button onClick={handleButtonClick} disabled={isLoginLoading}>
                    {isLoginLoading && (
                      <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                    )}
                    Sign In
                  </Button>
                  <span className="alert alert-danger" role="alert">
                    {errorMsg}
                  </span>
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
                onClick={handleGmailButtonClick}
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

              <form onSubmit={handleEmailLogin}>
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
                    value={magicEmail}
                    disabled={magicLoading}
                    required={true}
                    onChange={(event) => setMagicEmail(event.target.value)}
                  />{" "}
                  <Button
                    onClick={handleMagicButtonClick}
                    disabled={magicLoading}
                  >
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
              By clicking continue, you agree to our{" "}
              <a
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </a>{" "}
              and{" "}
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
    </>
  );
}
// export default Login;
