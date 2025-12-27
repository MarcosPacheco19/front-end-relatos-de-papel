import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";

import { cn } from "../../../lib/utils";

type AlertDialogDescriptionProps = React.ComponentProps<
  typeof AlertDialogPrimitive.Description
>;

export function AlertDialogDescription({
  className,
  ...props
}: AlertDialogDescriptionProps) {
  return (
    <AlertDialogPrimitive.Description
      className={cn("alert-dialog__description", className)}
      {...props}
    />
  );
}
