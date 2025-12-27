import { Slot } from "@radix-ui/react-slot";
import { cn } from "../../../lib/utils";

type SidebarMenuSubButtonProps = {
  asChild?: boolean;
  size?: "sm" | "md";
  isActive?: boolean;
  className?: string;
  children: React.ReactNode;
} & Omit<React.ComponentProps<"a">, "children">;

export function SidebarMenuSubButton({
  asChild = false,
  size = "md",
  isActive = false,
  className,
  ...props
}: SidebarMenuSubButtonProps) {
  const Comp = asChild ? Slot : "a";

  return (
    <Comp
      data-slot="sidebar-menu-sub-button"
      data-sidebar="menu-sub-button"
      data-size={size}
      data-active={isActive}
      className={cn(
        "sidebar__menu-sub-button",
        size === "sm" && "sidebar__menu-sub-button--sm",
        size === "md" && "sidebar__menu-sub-button--md",
        className
      )}
      {...props}
    />
  );
}
