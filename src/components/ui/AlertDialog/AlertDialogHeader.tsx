import { cn } from "../../../lib/utils";

type AlertDialogHeaderProps = React.ComponentProps<"div">;

export function AlertDialogHeader({
  className,
  ...props
}: AlertDialogHeaderProps) {
  return <div className={cn("alert-dialog__header", className)} {...props} />;
}
