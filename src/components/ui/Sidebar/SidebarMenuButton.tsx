import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "../../../lib/utils";
import { Tooltip, TooltipContent, TooltipTrigger } from "../Tooltip";
import { useSidebar } from "./useSidebar";

const sidebarMenuButtonVariants = cva("sidebar__menu-button", {
  variants: {
    variant: {
      default: "",
      outline: "sidebar__menu-button--outline",
    },
    size: {
      default: "sidebar__menu-button--default",
      sm: "sidebar__menu-button--sm",
      lg: "sidebar__menu-button--lg",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

type SidebarMenuButtonProps = {
  asChild?: boolean;
  isActive?: boolean;
  tooltip?: string | React.ComponentProps<typeof TooltipContent>;
  className?: string;
  children: React.ReactNode;
} & Omit<React.ComponentProps<"button">, "children"> &
  VariantProps<typeof sidebarMenuButtonVariants>;

export function SidebarMenuButton({
  asChild = false,
  isActive = false,
  variant = "default",
  size = "default",
  tooltip,
  className,
  ...props
}: SidebarMenuButtonProps) {
  const Comp = asChild ? Slot : "button";
  const { isMobile, state } = useSidebar();

  const button = (
    <Comp
      data-slot="sidebar-menu-button"
      data-sidebar="menu-button"
      data-size={size}
      data-active={isActive}
      className={cn(sidebarMenuButtonVariants({ variant, size }), className)}
      {...props}
    />
  );

  if (!tooltip) {
    return button;
  }

  if (typeof tooltip === "string") {
    tooltip = {
      children: tooltip,
    };
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>{button}</TooltipTrigger>
      <TooltipContent
        side="right"
        align="center"
        hidden={state !== "collapsed" || isMobile}
        {...tooltip}
      />
    </Tooltip>
  );
}
