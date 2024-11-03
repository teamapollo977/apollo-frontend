import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}) {
  return (<div className={cn("animate-pulse rounded-md bg-inverted-lighter", className)} {...props} />);
}

export { Skeleton }
