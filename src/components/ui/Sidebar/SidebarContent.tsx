import { cn } from "../../../lib/utils";

type SidebarContentProps = React.ComponentProps<"div">;

export function SidebarContent({ className, ...props }: SidebarContentProps) {
  return (
    <div
      data-slot="sidebar-content"
      data-sidebar="content"
      className={cn("sidebar__content", className)}
      {...props}
    />
  );
}
