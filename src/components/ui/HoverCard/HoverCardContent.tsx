import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import { cn } from "../../../lib/utils";

type HoverCardContentProps = React.ComponentProps<
  typeof HoverCardPrimitive.Content
>;

export function HoverCardContent({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}: HoverCardContentProps) {
  return (
    <HoverCardPrimitive.Portal>
      <HoverCardPrimitive.Content
        align={align}
        sideOffset={sideOffset}
        className={cn("hover-card__content", className)}
        {...props}
      />
    </HoverCardPrimitive.Portal>
  );
}
