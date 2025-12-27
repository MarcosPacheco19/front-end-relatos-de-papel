import { cn } from "../../../lib/utils";

type SidebarMenuBadgeProps = React.ComponentProps<"div">;

export function SidebarMenuBadge({
  className,
  ...props
}: SidebarMenuBadgeProps) {
  return (
    <div
      data-slot="sidebar-menu-badge"
      data-sidebar="menu-badge"
      className={cn("sidebar__menu-badge", className)}
      {...props}
    />
  );
}
