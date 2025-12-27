import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";
import { cn } from "../../../lib/utils";

type ContextMenuContentProps = React.ComponentProps<
  typeof ContextMenuPrimitive.Content
>;

export function ContextMenuContent({
  className,
  ...props
}: ContextMenuContentProps) {
  return (
    <ContextMenuPrimitive.Portal>
      <ContextMenuPrimitive.Content
        className={cn("context-menu__content", className)}
        {...props}
      />
    </ContextMenuPrimitive.Portal>
  );
}
