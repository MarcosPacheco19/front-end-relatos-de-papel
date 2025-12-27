import * as DialogPrimitive from "@radix-ui/react-dialog";
import "./Dialog.css";

type DialogProps = React.ComponentProps<typeof DialogPrimitive.Root>;

export function Dialog(props: DialogProps) {
  return <DialogPrimitive.Root {...props} />;
}
