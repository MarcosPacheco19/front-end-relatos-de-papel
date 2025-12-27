import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";

type DropdownMenuPortalProps = React.ComponentProps<
  typeof DropdownMenuPrimitive.Portal
>;

export function DropdownMenuPortal(props: DropdownMenuPortalProps) {
  return <DropdownMenuPrimitive.Portal {...props} />;
}
