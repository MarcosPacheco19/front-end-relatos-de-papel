import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";
import { cn } from "../../../lib/utils";

type ContextMenuSubContentProps = React.ComponentProps<
  typeof ContextMenuPrimitive.SubContent
>;

export function ContextMenuSubContent({
  className,
  ...props
}: ContextMenuSubContentProps) {
  return (
    <ContextMenuPrimitive.SubContent
      className={cn("context-menu__sub-content", className)}
      {...props}
    />
  );
}
