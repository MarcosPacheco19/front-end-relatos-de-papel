import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";
import "./ContextMenu.css";

type ContextMenuProps = React.ComponentProps<typeof ContextMenuPrimitive.Root>;

export function ContextMenu(props: ContextMenuProps) {
  return <ContextMenuPrimitive.Root {...props} />;
}
