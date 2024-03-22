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
import { ProfileMenu } from "@/components/profile-menu";
import { Search } from "@/components/search";

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
        <div className="ml-auto flex items-center space-x-4">
          <Search placeholder="Search..." />
          <ProfileMenu />
        </div>
      </nav>
      <div className="border-b">
        <div className="flex h-4  items-center px-4">
          {/* <TeamSwitcher /> */}
        </div>
      </div>
    </>
  );
}

// import {
//   Avatar,
//   AvatarFallback,
//   AvatarImage,
// } from "@/registry/new-york/ui/avatar"
// import { Button } from "@/registry/new-york/ui/button"
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuGroup,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuShortcut,
//   DropdownMenuTrigger,
// } from "@/registry/new-york/ui/dropdown-menu"

// export function UserNav() {
//   return (
//     <DropdownMenu>
//       <DropdownMenuTrigger asChild>
//         <Button variant="ghost" className="relative h-8 w-8 rounded-full">
//           <Avatar className="h-9 w-9">
//             <AvatarImage src="/avatars/03.png" alt="@shadcn" />
//             <AvatarFallback>SC</AvatarFallback>
//           </Avatar>
//         </Button>
//       </DropdownMenuTrigger>
//       <DropdownMenuContent className="w-56" align="end" forceMount>
//         <DropdownMenuLabel className="font-normal">
//           <div className="flex flex-col space-y-1">
//             <p className="text-sm font-medium leading-none">shadcn</p>
//             <p className="text-xs leading-none text-muted-foreground">
//               m@example.com
//             </p>
//           </div>
//         </DropdownMenuLabel>
//         <DropdownMenuSeparator />
//         <DropdownMenuGroup>
//           <DropdownMenuItem>
//             Profile
//             <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
//           </DropdownMenuItem>
//           <DropdownMenuItem>
//             Billing
//             <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
//           </DropdownMenuItem>
//           <DropdownMenuItem>
//             Settings
//             <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
//           </DropdownMenuItem>
//           <DropdownMenuItem>New Team</DropdownMenuItem>
//         </DropdownMenuGroup>
//         <DropdownMenuSeparator />
//         <DropdownMenuItem>
//           Log out
//           <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
//         </DropdownMenuItem>
//       </DropdownMenuContent>
//     </DropdownMenu>
//   )
// }
