import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";
import { CheckIcon } from "lucide-react";
import { cn } from "../../../lib/utils";

type ContextMenuCheckboxItemProps = React.ComponentProps<
  typeof ContextMenuPrimitive.CheckboxItem
>;

export function ContextMenuCheckboxItem({
  className,
  children,
  checked,
  ...props
}: ContextMenuCheckboxItemProps) {
  return (
    <ContextMenuPrimitive.CheckboxItem
      className={cn("context-menu__checkbox-item", className)}
      checked={checked}
      {...props}
    >
      <span className="context-menu__item-indicator">
        <ContextMenuPrimitive.ItemIndicator>
          <CheckIcon className="size-4" />
        </ContextMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </ContextMenuPrimitive.CheckboxItem>
  );
}
