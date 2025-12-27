import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";

type DropdownMenuGroupProps = React.ComponentProps<
  typeof DropdownMenuPrimitive.Group
>;

export function DropdownMenuGroup(props: DropdownMenuGroupProps) {
  return <DropdownMenuPrimitive.Group {...props} />;
}
