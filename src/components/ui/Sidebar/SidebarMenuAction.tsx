import { Slot } from "@radix-ui/react-slot";
import { cn } from "../../../lib/utils";

type SidebarMenuActionProps = {
  asChild?: boolean;
  showOnHover?: boolean;
  className?: string;
  children: React.ReactNode;
} & Omit<React.ComponentProps<"button">, "children">;

export function SidebarMenuAction({
  className,
  asChild = false,
  showOnHover = false,
  ...props
}: SidebarMenuActionProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="sidebar-menu-action"
      data-sidebar="menu-action"
      className={cn(
        "sidebar__menu-action",
        showOnHover && "sidebar__menu-action--show-on-hover",
        className
      )}
      {...props}
    />
  );
}
