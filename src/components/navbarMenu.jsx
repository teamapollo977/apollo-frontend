import * as React from "react"
import { Link } from "react-router-dom"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const shooting = [
  {
    title: "Score",
    href: "/scoring",
    description: "Practice shooting and mark your scores.",
  },
  {
    title: "Competition",
    href: "/competition",
    description:
      "Participate in archery competitions organized by your club.",
  },
  {
    title: "History",
    href: "/history",
    description: "Check your history of scores.",
  },
  {
    title: "Schedule",
    href: "/schedule",
    description: "Schedule and check your archery sessions.",
  },
]

const profile = [
  {
    title: "My Club",
    href: "club",
    description:
      "Manage your archery club affiliation. Check information about your club and events.",
  },
  {
    title: "Analytics",
    href: "/analytics",
    description:
      "Check your archery performance and statistics over time.",
  },
  {
    title: "Profile",
    href: "/profile",
    description:
      "Edit your personal information and preferences.",
  },
  {
    title: "Settings",
    href: "/settings",
    description: "Manage your account settings and preferences.",
  }
]

export function NavbarMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link to="/">
              Dashboard
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Shooting</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {shooting.map((item) => (
                <ListItem
                  key={item.title}
                  title={item.title}
                  to={item.href}
                >
                  {item.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Profile</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {profile.map((item) => (
                <ListItem
                  key={item.title}
                  title={item.title}
                  to={item.href}
                >
                  {item.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link to="/about">
              About Us
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <Link
        ref={ref}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-sunny hover:text-accent-foreground focus:bg-sunny focus:text-accent-foreground",
          className
        )}
        {...props}
      >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
      </Link>
    </li>
  )
})
ListItem.displayName = "ListItem"
