import * as PopoverPrimitive from "@radix-ui/react-popover";
import { cn } from "../../../lib/utils";

type PopoverContentProps = React.ComponentProps<
  typeof PopoverPrimitive.Content
>;

export function PopoverContent({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}: PopoverContentProps) {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        data-slot="popover-content"
        align={align}
        sideOffset={sideOffset}
        className={cn("popover__content", className)}
        {...props}
      />
    </PopoverPrimitive.Portal>
  );
}
