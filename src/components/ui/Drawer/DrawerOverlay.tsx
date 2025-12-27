import { Drawer as DrawerPrimitive } from "vaul";
import { cn } from "../../../lib/utils";

type DrawerOverlayProps = React.ComponentProps<typeof DrawerPrimitive.Overlay>;

export function DrawerOverlay({ className, ...props }: DrawerOverlayProps) {
  return (
    <DrawerPrimitive.Overlay
      className={cn("drawer__overlay", className)}
      {...props}
    />
  );
}
