import { cn } from "../../../lib/utils";

type SidebarMenuProps = React.ComponentProps<"ul">;

export function SidebarMenu({ className, ...props }: SidebarMenuProps) {
  return (
    <ul
      data-slot="sidebar-menu"
      data-sidebar="menu"
      className={cn("sidebar__menu", className)}
      {...props}
    />
  );
}
