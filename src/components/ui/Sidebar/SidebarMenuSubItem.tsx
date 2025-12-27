import { cn } from "../../../lib/utils";

type SidebarMenuSubItemProps = React.ComponentProps<"li">;

export function SidebarMenuSubItem({
  className,
  ...props
}: SidebarMenuSubItemProps) {
  return (
    <li
      data-slot="sidebar-menu-sub-item"
      data-sidebar="menu-sub-item"
      className={cn("sidebar__menu-sub-item", className)}
      {...props}
    />
  );
}
