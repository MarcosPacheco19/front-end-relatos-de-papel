import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";

type AlertDialogTriggerProps = React.ComponentProps<
  typeof AlertDialogPrimitive.Trigger
>;

export function AlertDialogTrigger({ ...props }: AlertDialogTriggerProps) {
  return <AlertDialogPrimitive.Trigger {...props} />;
}
