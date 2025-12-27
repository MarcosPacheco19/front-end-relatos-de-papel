import { Drawer as DrawerPrimitive } from "vaul";
import { cn } from "../../../lib/utils";
import { DrawerPortal } from "./DrawerPortal";
import { DrawerOverlay } from "./DrawerOverlay";

type DrawerContentProps = React.ComponentProps<typeof DrawerPrimitive.Content>;

export function DrawerContent({
  className,
  children,
  ...props
}: DrawerContentProps) {
  return (
    <DrawerPortal>
      <DrawerOverlay />
      <DrawerPrimitive.Content
        className={cn("drawer__content", className)}
        {...props}
      >
        <div className="drawer__handle" />
        {children}
      </DrawerPrimitive.Content>
    </DrawerPortal>
  );
}
