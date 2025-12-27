import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { cn } from "../../../lib/utils";

type NavigationMenuContentProps = React.ComponentProps<
  typeof NavigationMenuPrimitive.Content
>;

export function NavigationMenuContent({
  className,
  ...props
}: NavigationMenuContentProps) {
  return (
    <NavigationMenuPrimitive.Content
      data-slot="navigation-menu-content"
      className={cn(
        "navigation-menu__content",
        "group-data-[viewport=false]/navigation-menu:navigation-menu__content--no-viewport",
        "**:data-[slot=navigation-menu-link]:focus:ring-0",
        "**:data-[slot=navigation-menu-link]:focus:outline-none",
        className
      )}
      {...props}
    />
  );
}
