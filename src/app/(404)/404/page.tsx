import Link from "next/link";

export default function Component() {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md text-center">
        <img
          src="/placeholder.svg"
          width={300}
          height={300}
          alt="404 Illustration"
          className="mx-auto mb-6"
        />
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Oops, page not found!
        </h1>
        <p className="mt-4 text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-8">
          <Link
            href="#"
            className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            prefetch={false}
          >
            Go to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
