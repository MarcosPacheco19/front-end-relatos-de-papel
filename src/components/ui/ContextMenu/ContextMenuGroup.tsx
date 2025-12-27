import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";

type ContextMenuGroupProps = React.ComponentProps<
  typeof ContextMenuPrimitive.Group
>;

export function ContextMenuGroup(props: ContextMenuGroupProps) {
  return <ContextMenuPrimitive.Group {...props} />;
}
