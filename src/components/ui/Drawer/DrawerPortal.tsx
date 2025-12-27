import { Drawer as DrawerPrimitive } from "vaul";

type DrawerPortalProps = React.ComponentProps<typeof DrawerPrimitive.Portal>;

export function DrawerPortal(props: DrawerPortalProps) {
  return <DrawerPrimitive.Portal {...props} />;
}
