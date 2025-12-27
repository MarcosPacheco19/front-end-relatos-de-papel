import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";

import "./AlertDialog.css";

type AlertDialogProps = React.ComponentProps<typeof AlertDialogPrimitive.Root>;

export function AlertDialog({ ...props }: AlertDialogProps) {
  return <AlertDialogPrimitive.Root {...props} />;
}
