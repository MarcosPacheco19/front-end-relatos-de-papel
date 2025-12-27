import * as SheetPrimitive from "@radix-ui/react-dialog";
import { XIcon } from "lucide-react";
import { cn } from "../../../lib/utils";
import { SheetPortal } from "./SheetPortal";
import { SheetOverlay } from "./SheetOverlay";

type SheetContentProps = React.ComponentProps<typeof SheetPrimitive.Content> & {
  side?: "top" | "right" | "bottom" | "left";
};

export function SheetContent({
  className,
  children,
  side = "right",
  ...props
}: SheetContentProps) {
  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Content
        data-slot="sheet-content"
        className={cn(
          "sheet__content",
          side === "right" && "sheet__content--right",
          side === "left" && "sheet__content--left",
          side === "top" && "sheet__content--top",
          side === "bottom" && "sheet__content--bottom",
          className
        )}
        {...props}
      >
        {children}
        <SheetPrimitive.Close className="sheet__close">
          <XIcon className="size-4" />
          <span className="sr-only">Close</span>
        </SheetPrimitive.Close>
      </SheetPrimitive.Content>
    </SheetPortal>
  );
}
