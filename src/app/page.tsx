"use client";
import Link from "next/link";
import { JSX, SVGProps } from "react";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function LandingPage() {
  const router = useRouter();
  return (
    <div className="flex min-h-[100dvh] flex-col bg-primary">
      <header className="flex items-center justify-between px-6 py-4">
        <Link
          href="#"
          className="flex items-center gap-2 text-primary-foreground"
          prefetch={false}
        >
          <MountainIcon className="h-6 w-6" />
          <span className="text-lg font-semibold">Acme Inc</span>
        </Link>
        <Link
          href="/signin"
          className={cn(
            buttonVariants({ variant: "outline" }),
            "absolute right-4 top-4 md:right-8 md:top-8"
          )}
        >
          Login
        </Link>
      </header>
      <main className="flex flex-1 flex-col items-center justify-center px-6 text-center">
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
          Unlock the Power of the Web
        </h1>
        <p className="mt-6 max-w-xl text-lg text-primary-foreground/90">
          Experience the ultimate platform for Building and Managing your web
          applications. Don't worry, added put this page for fun nothing
          serious, just wanted something to show before the auth page. Enjoy!
        </p>
        <div className="mt-10">
          <Button
            className="rounded-full px-8 py-3 text-sm font-medium"
            onClick={() => router.push("/dashboard")}
          >
            Get Started
          </Button>
        </div>
      </main>
    </div>
  );
}

function MountainIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
