import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";

type ContextMenuPortalProps = React.ComponentProps<
  typeof ContextMenuPrimitive.Portal
>;

export function ContextMenuPortal(props: ContextMenuPortalProps) {
  return <ContextMenuPrimitive.Portal {...props} />;
}
