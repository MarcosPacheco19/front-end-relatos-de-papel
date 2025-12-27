import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { cn } from "../../../lib/utils";
import "./NavigationMenu.css";

type NavigationMenuProps = React.ComponentProps<
  typeof NavigationMenuPrimitive.Root
> & {
  viewport?: boolean;
};

export function NavigationMenu({
  className,
  children,
  viewport = true,
  ...props
}: NavigationMenuProps) {
  return (
    <NavigationMenuPrimitive.Root
      data-slot="navigation-menu"
      data-viewport={viewport}
      className={cn("navigation-menu group/navigation-menu", className)}
      {...props}
    >
      {children}
      {viewport && (
        <div className="navigation-menu__viewport-wrapper">
          <NavigationMenuPrimitive.Viewport
            data-slot="navigation-menu-viewport"
            className="navigation-menu__viewport"
          />
        </div>
      )}
    </NavigationMenuPrimitive.Root>
  );
}
