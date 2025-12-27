import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import { cn } from "../../../lib/utils";

type ScrollBarProps = React.ComponentProps<
  typeof ScrollAreaPrimitive.ScrollAreaScrollbar
>;

export function ScrollBar({
  className,
  orientation = "vertical",
  ...props
}: ScrollBarProps) {
  return (
    <ScrollAreaPrimitive.ScrollAreaScrollbar
      data-slot="scroll-area-scrollbar"
      orientation={orientation}
      className={cn(
        "scroll-area__scrollbar",
        orientation === "vertical" && "scroll-area__scrollbar--vertical",
        orientation === "horizontal" && "scroll-area__scrollbar--horizontal",
        className
      )}
      {...props}
    >
      <ScrollAreaPrimitive.ScrollAreaThumb
        data-slot="scroll-area-thumb"
        className="scroll-area__thumb"
      />
    </ScrollAreaPrimitive.ScrollAreaScrollbar>
  );
}
