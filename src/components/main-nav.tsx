"use client";
import Link from "next/link";
import {
  HomeIcon,
  AvatarIcon,
  ArchiveIcon,
  GearIcon,
} from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { buttonVariants } from "@/components/ui/button";

type NavigationItem = {
  href: string;
  icon: React.ComponentType;
  name: string;
};

const navigation: NavigationItem[] = [
  { href: "/dashboard", icon: HomeIcon, name: "Dashboard" },
  { href: "/dashboard/customers", icon: AvatarIcon, name: "Customers" },
  { href: "/dashboard/products", icon: ArchiveIcon, name: "Products" },
  { href: "/dashboard/settings", icon: GearIcon, name: "Settings" },
];

// const isActivePath = (path: string) => {
//   if (path === "/" && pathname !== path) {
//     return false;
//   }
//   return pathname.startsWith(path);
// };

// return isActivePath;

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <ul>
        {navigation.map(({ href, icon: Icon, name }) => (
          <li key={href}>
            <Link
              href={href}
              className={cn(
                buttonVariants({ variant: "ghost" }),
                pathname === href ? "bg-black text-white dark:bg-white" : "",
                "justify-start"
              )}
            >
              <Icon />
              <span>{name}</span>
            </Link>
          </li>
        ))}
      </ul>
      {/* <Link
        href="/dashboard/"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Overview
      </Link>
      <Link
        href="/dashboard/customers"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Customers
      </Link>
      <Link
        href="/dashboard/products"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Products
      </Link>
      <Link
        href="/dashboard/settings"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Settings
      </Link> */}
    </nav>
  );
}
