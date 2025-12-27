import * as SelectPrimitive from "@radix-ui/react-select";
import { cn } from "../../../lib/utils";
import { SelectScrollUpButton } from "./SelectScrollUpButton";
import { SelectScrollDownButton } from "./SelectScrollDownButton";

type SelectContentProps = React.ComponentProps<typeof SelectPrimitive.Content>;

export function SelectContent({
  className,
  children,
  position = "popper",
  ...props
}: SelectContentProps) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot="select-content"
        className={cn(
          "select__content",
          position === "popper" && "select__content--popper",
          className
        )}
        position={position}
        {...props}
      >
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport
          className={cn(
            "select__viewport",
            position === "popper" && "select__viewport--popper"
          )}
        >
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  );
}
