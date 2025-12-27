import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import "./DropdownMenu.css";

type DropdownMenuProps = React.ComponentProps<
  typeof DropdownMenuPrimitive.Root
>;

export function DropdownMenu(props: DropdownMenuProps) {
  return <DropdownMenuPrimitive.Root {...props} />;
}
