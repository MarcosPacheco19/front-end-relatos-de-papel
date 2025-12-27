import { Drawer as DrawerPrimitive } from "vaul";

type DrawerCloseProps = React.ComponentProps<typeof DrawerPrimitive.Close>;

export function DrawerClose(props: DrawerCloseProps) {
  return <DrawerPrimitive.Close {...props} />;
}
