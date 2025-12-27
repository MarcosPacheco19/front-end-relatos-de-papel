import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { cn } from "../../../lib/utils";

type NavigationMenuItemProps = React.ComponentProps<
  typeof NavigationMenuPrimitive.Item
>;

export function NavigationMenuItem({
  className,
  ...props
}: NavigationMenuItemProps) {
  return (
    <NavigationMenuPrimitive.Item
      data-slot="navigation-menu-item"
      className={cn("navigation-menu__item", className)}
      {...props}
    />
  );
}
