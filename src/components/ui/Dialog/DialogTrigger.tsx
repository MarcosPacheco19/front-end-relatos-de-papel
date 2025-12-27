import * as DialogPrimitive from "@radix-ui/react-dialog";

type DialogTriggerProps = React.ComponentProps<typeof DialogPrimitive.Trigger>;

export function DialogTrigger(props: DialogTriggerProps) {
  return <DialogPrimitive.Trigger {...props} />;
}
