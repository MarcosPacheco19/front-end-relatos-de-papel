import * as DialogPrimitive from "@radix-ui/react-dialog";

type DialogPortalProps = React.ComponentProps<typeof DialogPrimitive.Portal>;

export function DialogPortal(props: DialogPortalProps) {
  return <DialogPrimitive.Portal {...props} />;
}
