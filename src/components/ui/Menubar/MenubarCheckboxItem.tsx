import * as MenubarPrimitive from "@radix-ui/react-menubar";
import { CheckIcon } from "lucide-react";
import { cn } from "../../../lib/utils";

type MenubarCheckboxItemProps = React.ComponentProps<
  typeof MenubarPrimitive.CheckboxItem
>;

export function MenubarCheckboxItem({
  className,
  children,
  checked,
  ...props
}: MenubarCheckboxItemProps) {
  return (
    <MenubarPrimitive.CheckboxItem
      data-slot="menubar-checkbox-item"
      className={cn("menubar__checkbox-item", className)}
      checked={checked}
      {...props}
    >
      <span className="menubar__item-indicator">
        <MenubarPrimitive.ItemIndicator>
          <CheckIcon className="size-4" />
        </MenubarPrimitive.ItemIndicator>
      </span>
      {children}
    </MenubarPrimitive.CheckboxItem>
  );
}
