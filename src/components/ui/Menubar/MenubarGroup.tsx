import * as MenubarPrimitive from "@radix-ui/react-menubar";

type MenubarGroupProps = React.ComponentProps<typeof MenubarPrimitive.Group>;

export function MenubarGroup(props: MenubarGroupProps) {
  return <MenubarPrimitive.Group data-slot="menubar-group" {...props} />;
}
