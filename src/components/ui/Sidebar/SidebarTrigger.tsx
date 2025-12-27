import { PanelLeftIcon } from "lucide-react";
import { cn } from "../../../lib/utils";
import { Button } from "../Button";
import { useSidebar } from "./useSidebar";

type SidebarTriggerProps = React.ComponentProps<typeof Button>;

export function SidebarTrigger({
  className,
  onClick,
  ...props
}: SidebarTriggerProps) {
  const { toggleSidebar } = useSidebar();

  return (
    <Button
      data-sidebar="trigger"
      data-slot="sidebar-trigger"
      variant="ghost"
      size="icon"
      className={cn("sidebar__trigger", className)}
      onClick={(event) => {
        onClick?.(event);
        toggleSidebar();
      }}
      {...props}
    >
      <PanelLeftIcon />
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  );
}
