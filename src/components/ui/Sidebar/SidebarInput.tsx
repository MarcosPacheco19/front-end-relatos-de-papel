import { cn } from "../../../lib/utils";
import { Input } from "../Input";

type SidebarInputProps = React.ComponentProps<typeof Input>;

export function SidebarInput({ className, ...props }: SidebarInputProps) {
  return (
    <Input
      data-slot="sidebar-input"
      data-sidebar="input"
      className={cn("sidebar__input", className)}
      {...props}
    />
  );
}
