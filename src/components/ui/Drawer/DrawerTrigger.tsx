import { Drawer as DrawerPrimitive } from "vaul";

type DrawerTriggerProps = React.ComponentProps<typeof DrawerPrimitive.Trigger>;

export function DrawerTrigger(props: DrawerTriggerProps) {
  return <DrawerPrimitive.Trigger {...props} />;
}
