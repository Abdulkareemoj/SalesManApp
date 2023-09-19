import { cn } from "@/lib/utils";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <ul>
        <li className="text-sm font-medium transition-colors hover:text-primary">
          <a href="#">Overview</a>
        </li>
        <li className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
          <a href="#">Customers</a>
        </li>
        <li className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
          <a href="#">Products</a>
        </li>
        <li className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
          <a href="#">Settings</a>
        </li>
      </ul>
    </nav>
  );
}
