import * as DialogPrimitive from "@radix-ui/react-dialog";

type DialogCloseProps = React.ComponentProps<typeof DialogPrimitive.Close>;

export function DialogClose(props: DialogCloseProps) {
  return <DialogPrimitive.Close {...props} />;
}
