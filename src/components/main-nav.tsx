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
import { Button, buttonVariants } from "@/components/ui/button";
import { ProfileMenu } from "@/components/profile-menu";
import { Search } from "@/components/search";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

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
    <>
      <header className="bg-background/70 backdrop-blur sticky top-0 z-50 flex h-16 items-center gap-4 border-b px-4 md:px-6">
        <nav
          className={cn(
            "hidden md:flex justify-between w-full flex-col gap-6 text-lg font-medium md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6",
            className
          )}
          {...props}
        >
          <div className="flex flex-col md:flex-row md:items-center">
            {navigation.map(({ href, icon: Icon, name }) => (
              <div key={href} className="flex">
                <Link
                  href={href}
                  className={cn(
                    buttonVariants({ variant: "ghost" }),
                    pathname === href
                      ? "bg-black text-white dark:bg-white"
                      : "",
                    "justify-start"
                  )}
                >
                  <Icon />
                  <span className="px-2">{name}</span>
                </Link>
              </div>
            ))}
          </div>
          <div className="ml-auto flex items-center space-x-4">
            <Search placeholder="Search..." />
            <ProfileMenu />
          </div>
        </nav>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              {navigation.map(({ href, icon: Icon, name }) => (
                <div key={href}>
                  <Link
                    href={href}
                    className={cn(
                      buttonVariants({ variant: "ghost" }),
                      pathname === href
                        ? "bg-black text-white dark:bg-white"
                        : "",
                      "justify-start"
                    )}
                  >
                    <Icon />
                    <span className="px-2">{name}</span>
                  </Link>
                </div>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </header>
    </>
  );
}
