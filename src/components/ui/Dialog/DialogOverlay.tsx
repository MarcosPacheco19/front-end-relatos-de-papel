import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cn } from "../../../lib/utils";

type DialogOverlayProps = React.ComponentProps<typeof DialogPrimitive.Overlay>;

export function DialogOverlay({ className, ...props }: DialogOverlayProps) {
  return (
    <DialogPrimitive.Overlay
      className={cn("dialog__overlay", className)}
      {...props}
    />
  );
}
