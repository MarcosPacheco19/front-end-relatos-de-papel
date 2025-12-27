import { cn } from "../../../lib/utils";

type SidebarHeaderProps = React.ComponentProps<"div">;

export function SidebarHeader({ className, ...props }: SidebarHeaderProps) {
  return (
    <div
      data-slot="sidebar-header"
      data-sidebar="header"
      className={cn("sidebar__header", className)}
      {...props}
    />
  );
}
