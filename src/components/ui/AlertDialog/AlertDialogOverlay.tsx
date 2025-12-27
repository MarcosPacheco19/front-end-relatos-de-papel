import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";

import { cn } from "../../../lib/utils";

type AlertDialogOverlayProps = React.ComponentProps<
  typeof AlertDialogPrimitive.Overlay
>;

export function AlertDialogOverlay({
  className,
  ...props
}: AlertDialogOverlayProps) {
  return (
    <AlertDialogPrimitive.Overlay
      className={cn("alert-dialog__overlay", className)}
      {...props}
    />
  );
}
