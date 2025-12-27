import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";
import { ChevronRightIcon } from "lucide-react";
import { cn } from "../../../lib/utils";

type ContextMenuSubTriggerProps = React.ComponentProps<
  typeof ContextMenuPrimitive.SubTrigger
> & {
  inset?: boolean;
};

export function ContextMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}: ContextMenuSubTriggerProps) {
  return (
    <ContextMenuPrimitive.SubTrigger
      data-inset={inset}
      className={cn("context-menu__sub-trigger", className)}
      {...props}
    >
      {children}
      <ChevronRightIcon className="ml-auto" />
    </ContextMenuPrimitive.SubTrigger>
  );
}
