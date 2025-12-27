import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";

type DropdownMenuSubProps = React.ComponentProps<
  typeof DropdownMenuPrimitive.Sub
>;

export function DropdownMenuSub(props: DropdownMenuSubProps) {
  return <DropdownMenuPrimitive.Sub {...props} />;
}
