import * as SheetPrimitive from "@radix-ui/react-dialog";
import { cn } from "../../../lib/utils";

type SheetOverlayProps = React.ComponentProps<typeof SheetPrimitive.Overlay>;

export function SheetOverlay({ className, ...props }: SheetOverlayProps) {
  return (
    <SheetPrimitive.Overlay
      data-slot="sheet-overlay"
      className={cn("sheet__overlay", className)}
      {...props}
    />
  );
}
