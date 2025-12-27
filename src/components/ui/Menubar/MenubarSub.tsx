import * as MenubarPrimitive from "@radix-ui/react-menubar";

type MenubarSubProps = React.ComponentProps<typeof MenubarPrimitive.Sub>;

export function MenubarSub(props: MenubarSubProps) {
  return <MenubarPrimitive.Sub data-slot="menubar-sub" {...props} />;
}
