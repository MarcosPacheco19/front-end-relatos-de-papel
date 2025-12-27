import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";
import { cn } from "../../../lib/utils";

type ContextMenuTriggerProps = React.ComponentProps<
  typeof ContextMenuPrimitive.Trigger
>;

export function ContextMenuTrigger({
  className,
  ...props
}: ContextMenuTriggerProps) {
  return (
    <ContextMenuPrimitive.Trigger
      className={cn("context-menu__trigger", className)}
      {...props}
    />
  );
}
