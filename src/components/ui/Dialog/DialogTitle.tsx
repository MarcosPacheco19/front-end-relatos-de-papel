import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cn } from "../../../lib/utils";

type DialogTitleProps = React.ComponentProps<typeof DialogPrimitive.Title>;

export function DialogTitle({ className, ...props }: DialogTitleProps) {
  return (
    <DialogPrimitive.Title
      className={cn("dialog__title", className)}
      {...props}
    />
  );
}
