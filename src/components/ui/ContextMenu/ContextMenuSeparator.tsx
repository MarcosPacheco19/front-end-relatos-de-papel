import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";
import { cn } from "../../../lib/utils";

type ContextMenuSeparatorProps = React.ComponentProps<
  typeof ContextMenuPrimitive.Separator
>;

export function ContextMenuSeparator({
  className,
  ...props
}: ContextMenuSeparatorProps) {
  return (
    <ContextMenuPrimitive.Separator
      className={cn("context-menu__separator", className)}
      {...props}
    />
  );
}
