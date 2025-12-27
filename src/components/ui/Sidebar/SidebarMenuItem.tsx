import { cn } from "../../../lib/utils";

type SidebarMenuItemProps = React.ComponentProps<"li">;

export function SidebarMenuItem({ className, ...props }: SidebarMenuItemProps) {
  return (
    <li
      data-slot="sidebar-menu-item"
      data-sidebar="menu-item"
      className={cn("sidebar__menu-item", className)}
      {...props}
    />
  );
}
