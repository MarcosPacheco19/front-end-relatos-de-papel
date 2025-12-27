import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { cn } from "../../../lib/utils";

type NavigationMenuListProps = React.ComponentProps<
  typeof NavigationMenuPrimitive.List
>;

export function NavigationMenuList({
  className,
  ...props
}: NavigationMenuListProps) {
  return (
    <NavigationMenuPrimitive.List
      data-slot="navigation-menu-list"
      className={cn("navigation-menu__list", className)}
      {...props}
    />
  );
}
