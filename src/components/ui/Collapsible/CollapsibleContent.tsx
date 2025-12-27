import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import { cn } from "../../../lib/utils";

type CollapsibleContentProps = React.ComponentProps<
  typeof CollapsiblePrimitive.CollapsibleContent
>;

export function CollapsibleContent({
  className,
  ...props
}: CollapsibleContentProps) {
  return (
    <CollapsiblePrimitive.CollapsibleContent
      className={cn("collapsible__content", className)}
      {...props}
    />
  );
}
