import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";
import { CircleIcon } from "lucide-react";
import { cn } from "../../../lib/utils";

type ContextMenuRadioItemProps = React.ComponentProps<
  typeof ContextMenuPrimitive.RadioItem
>;

export function ContextMenuRadioItem({
  className,
  children,
  ...props
}: ContextMenuRadioItemProps) {
  return (
    <ContextMenuPrimitive.RadioItem
      className={cn("context-menu__radio-item", className)}
      {...props}
    >
      <span className="context-menu__item-indicator">
        <ContextMenuPrimitive.ItemIndicator>
          <CircleIcon className="size-2 fill-current" />
        </ContextMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </ContextMenuPrimitive.RadioItem>
  );
}
