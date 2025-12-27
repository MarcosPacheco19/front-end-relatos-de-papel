import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { CircleIcon } from "lucide-react";
import { cn } from "../../../lib/utils";

type DropdownMenuRadioItemProps = React.ComponentProps<
  typeof DropdownMenuPrimitive.RadioItem
>;

export function DropdownMenuRadioItem({
  className,
  children,
  ...props
}: DropdownMenuRadioItemProps) {
  return (
    <DropdownMenuPrimitive.RadioItem
      className={cn("dropdown-menu__radio-item", className)}
      {...props}
    >
      <span className="dropdown-menu__item-indicator">
        <DropdownMenuPrimitive.ItemIndicator>
          <CircleIcon className="size-2 fill-current" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.RadioItem>
  );
}
