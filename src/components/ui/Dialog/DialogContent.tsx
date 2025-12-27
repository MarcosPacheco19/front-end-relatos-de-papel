import * as DialogPrimitive from "@radix-ui/react-dialog";
import { XIcon } from "lucide-react";
import { cn } from "../../../lib/utils";
import { DialogPortal } from "./DialogPortal";
import { DialogOverlay } from "./DialogOverlay";

type DialogContentProps = React.ComponentProps<typeof DialogPrimitive.Content>;

export function DialogContent({
  className,
  children,
  ...props
}: DialogContentProps) {
  return (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.Content
        className={cn("dialog__content", className)}
        {...props}
      >
        {children}
        <DialogPrimitive.Close className="dialog__close">
          <XIcon />
          <span className="sr-only">Close</span>
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPortal>
  );
}
