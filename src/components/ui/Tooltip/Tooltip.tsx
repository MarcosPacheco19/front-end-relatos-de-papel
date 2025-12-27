import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { TooltipProvider } from "./TooltipProvider";

type TooltipProps = React.ComponentProps<typeof TooltipPrimitive.Root>;

export function Tooltip({ ...props }: TooltipProps) {
  return (
    <TooltipProvider>
      <TooltipPrimitive.Root data-slot="tooltip" {...props} />
    </TooltipProvider>
  );
}
