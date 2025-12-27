import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { cn } from "../../../lib/utils";
import "./Tooltip.css";

type TooltipContentProps = React.ComponentProps<
  typeof TooltipPrimitive.Content
>;

export function TooltipContent({
  className,
  sideOffset = 0,
  children,
  ...props
}: TooltipContentProps) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        data-slot="tooltip-content"
        sideOffset={sideOffset}
        className={cn("tooltip__content", className)}
        {...props}
      >
        {children}
        <TooltipPrimitive.Arrow className="tooltip__arrow" />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  );
}
