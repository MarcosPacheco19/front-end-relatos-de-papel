import { cn } from "../../../lib/utils";

type SidebarFooterProps = React.ComponentProps<"div">;

export function SidebarFooter({ className, ...props }: SidebarFooterProps) {
  return (
    <div
      data-slot="sidebar-footer"
      data-sidebar="footer"
      className={cn("sidebar__footer", className)}
      {...props}
    />
  );
}
