import { Slot } from "@radix-ui/react-slot";
import { cn } from "../../../lib/utils";

type SidebarGroupLabelProps = {
  asChild?: boolean;
  className?: string;
  children: React.ReactNode;
} & Omit<React.ComponentProps<"div">, "children">;

export function SidebarGroupLabel({
  className,
  asChild = false,
  ...props
}: SidebarGroupLabelProps) {
  const Comp = asChild ? Slot : "div";

  return (
    <Comp
      data-slot="sidebar-group-label"
      data-sidebar="group-label"
      className={cn("sidebar__group-label", className)}
      {...props}
    />
  );
}
