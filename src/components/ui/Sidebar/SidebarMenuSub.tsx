import { cn } from "../../../lib/utils";

type SidebarMenuSubProps = React.ComponentProps<"ul">;

export function SidebarMenuSub({ className, ...props }: SidebarMenuSubProps) {
  return (
    <ul
      data-slot="sidebar-menu-sub"
      data-sidebar="menu-sub"
      className={cn("sidebar__menu-sub", className)}
      {...props}
    />
  );
}
