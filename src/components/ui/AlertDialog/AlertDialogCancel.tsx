import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";

import { cn } from "../../../lib/utils";
import { buttonVariants } from "../Button/Button";

type AlertDialogCancelProps = React.ComponentProps<
  typeof AlertDialogPrimitive.Cancel
>;

export function AlertDialogCancel({
  className,
  ...props
}: AlertDialogCancelProps) {
  return (
    <AlertDialogPrimitive.Cancel
      className={cn(buttonVariants({ variant: "outline" }), className)}
      {...props}
    />
  );
}
