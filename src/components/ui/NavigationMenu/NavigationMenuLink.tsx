import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { cn } from "../../../lib/utils";

type NavigationMenuLinkProps = React.ComponentProps<
  typeof NavigationMenuPrimitive.Link
>;

export function NavigationMenuLink({
  className,
  ...props
}: NavigationMenuLinkProps) {
  return (
    <NavigationMenuPrimitive.Link
      data-slot="navigation-menu-link"
      className={cn("navigation-menu__link", className)}
      {...props}
    />
  );
}
