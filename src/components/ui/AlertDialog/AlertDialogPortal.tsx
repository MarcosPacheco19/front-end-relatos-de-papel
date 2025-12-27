import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";

type AlertDialogPortalProps = React.ComponentProps<
  typeof AlertDialogPrimitive.Portal
>;

export function AlertDialogPortal({ ...props }: AlertDialogPortalProps) {
  return <AlertDialogPrimitive.Portal {...props} />;
}
