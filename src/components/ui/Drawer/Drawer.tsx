import { Drawer as DrawerPrimitive } from "vaul";
import "./Drawer.css";

type DrawerProps = React.ComponentProps<typeof DrawerPrimitive.Root>;

export function Drawer(props: DrawerProps) {
  return <DrawerPrimitive.Root {...props} />;
}
