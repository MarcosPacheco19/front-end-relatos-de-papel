import * as MenubarPrimitive from "@radix-ui/react-menubar";

type MenubarMenuProps = React.ComponentProps<typeof MenubarPrimitive.Menu>;

export function MenubarMenu(props: MenubarMenuProps) {
  return <MenubarPrimitive.Menu data-slot="menubar-menu" {...props} />;
}
