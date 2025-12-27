import { cn } from "../../../lib/utils";

type DrawerHeaderProps = React.ComponentProps<"div">;

export function DrawerHeader({ className, ...props }: DrawerHeaderProps) {
  return <div className={cn("drawer__header", className)} {...props} />;
}
