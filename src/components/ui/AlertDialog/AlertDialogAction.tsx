import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";

import { cn } from "../../../lib/utils";
import { buttonVariants } from "../Button/Button";

type AlertDialogActionProps = React.ComponentProps<
  typeof AlertDialogPrimitive.Action
>;

export function AlertDialogAction({
  className,
  ...props
}: AlertDialogActionProps) {
  return (
    <AlertDialogPrimitive.Action
      className={cn(buttonVariants(), className)}
      {...props}
    />
  );
}
