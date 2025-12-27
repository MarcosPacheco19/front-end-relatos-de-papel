import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";

import { cn } from "../../../lib/utils";
import { AlertDialogPortal } from "./AlertDialogPortal";
import { AlertDialogOverlay } from "./AlertDialogOverlay";

type AlertDialogContentProps = React.ComponentProps<
  typeof AlertDialogPrimitive.Content
>;

export function AlertDialogContent({
  className,
  ...props
}: AlertDialogContentProps) {
  return (
    <AlertDialogPortal>
      <AlertDialogOverlay />
      <AlertDialogPrimitive.Content
        className={cn("alert-dialog__content", className)}
        {...props}
      />
    </AlertDialogPortal>
  );
}
