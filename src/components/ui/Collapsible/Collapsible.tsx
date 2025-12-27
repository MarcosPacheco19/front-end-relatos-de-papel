import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import { cn } from "../../../lib/utils";
import "./Collapsible.css";

type CollapsibleProps = React.ComponentProps<typeof CollapsiblePrimitive.Root>;

export function Collapsible({ className, ...props }: CollapsibleProps) {
  return (
    <CollapsiblePrimitive.Root
      className={cn("collapsible", className)}
      {...props}
    />
  );
}
