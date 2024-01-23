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

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();
  return (
    <nav
      className={cn(" flex relative justify-start gap-2", className)}
      {...props}
    >
      {navigation.map(({ href, icon: Icon, name }) => (
        <div key={href}>
          <Link
            href={href}
            className={cn(
              buttonVariants({ variant: "ghost" }),
              pathname === href ? "bg-black text-white dark:bg-white" : "",
              "justify-start"
            )}
          >
            <Icon />
            <span className="	px-2">{name}</span>
          </Link>
        </div>
      ))}
    </nav>
  );
}
