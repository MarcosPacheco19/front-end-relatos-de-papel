import * as MenubarPrimitive from "@radix-ui/react-menubar";

type MenubarPortalProps = React.ComponentProps<typeof MenubarPrimitive.Portal>;

export function MenubarPortal(props: MenubarPortalProps) {
  return <MenubarPrimitive.Portal data-slot="menubar-portal" {...props} />;
}
