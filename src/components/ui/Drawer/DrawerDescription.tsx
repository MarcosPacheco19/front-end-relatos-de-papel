import { Drawer as DrawerPrimitive } from "vaul";
import { cn } from "../../../lib/utils";

type DrawerDescriptionProps = React.ComponentProps<
  typeof DrawerPrimitive.Description
>;

export function DrawerDescription({
  className,
  ...props
}: DrawerDescriptionProps) {
  return (
    <DrawerPrimitive.Description
      className={cn("drawer__description", className)}
      {...props}
    />
  );
}
