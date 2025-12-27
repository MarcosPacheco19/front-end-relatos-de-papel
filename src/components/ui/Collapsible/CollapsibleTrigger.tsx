import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import { cn } from "../../../lib/utils";

type CollapsibleTriggerProps = React.ComponentProps<
  typeof CollapsiblePrimitive.CollapsibleTrigger
>;

export function CollapsibleTrigger({
  className,
  ...props
}: CollapsibleTriggerProps) {
  return (
    <CollapsiblePrimitive.CollapsibleTrigger
      className={cn("collapsible__trigger", className)}
      {...props}
    />
  );
}
