import { Slot } from "@radix-ui/react-slot";
import { cn } from "../../../lib/utils";

type SidebarGroupActionProps = {
  asChild?: boolean;
  className?: string;
  children: React.ReactNode;
} & Omit<React.ComponentProps<"button">, "children">;

export function SidebarGroupAction({
  className,
  asChild = false,
  ...props
}: SidebarGroupActionProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="sidebar-group-action"
      data-sidebar="group-action"
      className={cn("sidebar__group-action", className)}
      {...props}
    />
  );
}
