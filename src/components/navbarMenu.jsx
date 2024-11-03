import * as React from "react"
import { Link } from "react-router-dom"
import { useAuth } from "@/components/authProvider";

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
import { useEffect, useState } from "react"

const shooting = [
  {
    title: "Score",
    href: "/scoring",
    description: "Practice shooting and mark your scores.",
  },
  {
    title: "History",
    href: "/history",
    description: "Check your history of scores.",
  },
  {
    title: "Upcoming Events",
    href: "/upcoming-events",
    description: "Check archery events available for you.",
  },
  {
    title: "My Events",
    href: "/schedule",
    description: "See archery events you are taking part in.",
  },
  {
    title: "Analytics",
    href: "/analytics",
    description:
      "Check your archery performance and statistics over time.",
  },
]

const managementPresident = [
  {
    title: "Create Competition",
    href: "/create-competition",
    description: "Create and manage archery competitions for your club."
  },
  {
    title: "Pending Users",
    href: "/pending-users",
    description: "Approve or reject users requesting to join your club.",
  },
]

const managementAdmin = [
  {
    title: "Pending Clubs",
    href: "/admin/pending-clubs",
    description: "Review clubs requesting to join Apollo Archery.",
  },
  {
    title: "Invite Club",
    href: "/admin/invite-club",
    description: "Invite clubs to join Apollo Archery.",
  },
]

export function NavbarMenu() {
  const [ managementOptions, setManagementOptions ] = useState(managementPresident);
  const { userRole } = useAuth();

  const checkPermissions = () => {
    let options = managementPresident;
    if (userRole === "Admin") {
      options = [...options, ...managementAdmin];
    }
    setManagementOptions(options);
  }

  useEffect(() => {
    checkPermissions();
  }, [userRole]);

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link to="/dashboard">
              Dashboard
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        {(userRole === "Admin" || userRole === "Club President") && (
        <NavigationMenuItem>
          <NavigationMenuTrigger>Management</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {managementOptions.map((item) => (
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
        </NavigationMenuItem>)}
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
