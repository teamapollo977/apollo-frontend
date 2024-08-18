import * as React from "react"
import { Link } from "react-router-dom"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const profiles = [
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
          <Link to="/competition">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Dashboard
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Shooting</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <ListItem to="/scoring" title="Score">
                Practice shooting and mark your scores.
              </ListItem>
              <ListItem to="/competition" title="Competition">
                Participate in an archery competition organized by your archery club.
              </ListItem>
              <ListItem to="/history" title="History">
                Check your history of scores.
              </ListItem>
              <ListItem to="/schedule" title="Schedule">
                Schedule and check your archery sessions.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Profile</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {profiles.map((profile) => (
                <ListItem
                  key={profile.title}
                  title={profile.title}
                  to={profile.href}
                >
                  {profile.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="/about">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              About Us
            </NavigationMenuLink>
          </Link>
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
