import * as SelectPrimitive from "@radix-ui/react-select";
import { CheckIcon } from "lucide-react";
import { cn } from "../../../lib/utils";

type SelectItemProps = React.ComponentProps<typeof SelectPrimitive.Item>;

export function SelectItem({ className, children, ...props }: SelectItemProps) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn("select__item", className)}
      {...props}
    >
      <span className="select__item-indicator">
        <SelectPrimitive.ItemIndicator>
          <CheckIcon className="size-4" />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  );
}
