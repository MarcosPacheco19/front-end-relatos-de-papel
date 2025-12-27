import { cn } from "../../../lib/utils";

type SidebarGroupProps = React.ComponentProps<"div">;

export function SidebarGroup({ className, ...props }: SidebarGroupProps) {
  return (
    <div
      data-slot="sidebar-group"
      data-sidebar="group"
      className={cn("sidebar__group", className)}
      {...props}
    />
  );
}
