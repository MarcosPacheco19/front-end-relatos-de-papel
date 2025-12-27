import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";

type ContextMenuSubProps = React.ComponentProps<
  typeof ContextMenuPrimitive.Sub
>;

export function ContextMenuSub(props: ContextMenuSubProps) {
  return <ContextMenuPrimitive.Sub {...props} />;
}
