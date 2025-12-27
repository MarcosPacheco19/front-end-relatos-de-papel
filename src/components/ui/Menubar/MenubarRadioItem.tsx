import * as MenubarPrimitive from "@radix-ui/react-menubar";
import { CircleIcon } from "lucide-react";
import { cn } from "../../../lib/utils";

type MenubarRadioItemProps = React.ComponentProps<
  typeof MenubarPrimitive.RadioItem
>;

export function MenubarRadioItem({
  className,
  children,
  ...props
}: MenubarRadioItemProps) {
  return (
    <MenubarPrimitive.RadioItem
      data-slot="menubar-radio-item"
      className={cn("menubar__radio-item", className)}
      {...props}
    >
      <span className="menubar__item-indicator">
        <MenubarPrimitive.ItemIndicator>
          <CircleIcon className="size-2 fill-current" />
        </MenubarPrimitive.ItemIndicator>
      </span>
      {children}
    </MenubarPrimitive.RadioItem>
  );
}
