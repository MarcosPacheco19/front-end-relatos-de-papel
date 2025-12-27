import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cn } from "../../../lib/utils";

type DialogDescriptionProps = React.ComponentProps<
  typeof DialogPrimitive.Description
>;

export function DialogDescription({
  className,
  ...props
}: DialogDescriptionProps) {
  return (
    <DialogPrimitive.Description
      className={cn("dialog__description", className)}
      {...props}
    />
  );
}
