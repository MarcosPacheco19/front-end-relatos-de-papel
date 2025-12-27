import { Drawer as DrawerPrimitive } from "vaul";
import { cn } from "../../../lib/utils";

type DrawerTitleProps = React.ComponentProps<typeof DrawerPrimitive.Title>;

export function DrawerTitle({ className, ...props }: DrawerTitleProps) {
  return (
    <DrawerPrimitive.Title
      className={cn("drawer__title", className)}
      {...props}
    />
  );
}
