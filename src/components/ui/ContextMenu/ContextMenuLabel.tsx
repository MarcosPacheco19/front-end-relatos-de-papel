import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";
import { cn } from "../../../lib/utils";

type ContextMenuLabelProps = React.ComponentProps<
  typeof ContextMenuPrimitive.Label
> & {
  inset?: boolean;
};

export function ContextMenuLabel({
  className,
  inset,
  ...props
}: ContextMenuLabelProps) {
  return (
    <ContextMenuPrimitive.Label
      data-inset={inset}
      className={cn("context-menu__label", className)}
      {...props}
    />
  );
}
