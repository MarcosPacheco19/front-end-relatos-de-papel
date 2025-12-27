import { cn } from "../../../lib/utils";
import { useSidebar } from "./useSidebar";

type SidebarRailProps = React.ComponentProps<"button">;

export function SidebarRail({ className, ...props }: SidebarRailProps) {
  const { toggleSidebar } = useSidebar();

  return (
    <button
      data-sidebar="rail"
      data-slot="sidebar-rail"
      aria-label="Toggle Sidebar"
      tabIndex={-1}
      onClick={toggleSidebar}
      title="Toggle Sidebar"
      className={cn("sidebar__rail", className)}
      {...props}
    />
  );
}
