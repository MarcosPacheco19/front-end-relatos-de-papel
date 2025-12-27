import { cn } from "../../../lib/utils";
import { Separator } from "../Separator";

type SidebarSeparatorProps = React.ComponentProps<typeof Separator>;

export function SidebarSeparator({
  className,
  ...props
}: SidebarSeparatorProps) {
  return (
    <Separator
      data-slot="sidebar-separator"
      data-sidebar="separator"
      className={cn("sidebar__separator", className)}
      {...props}
    />
  );
}
