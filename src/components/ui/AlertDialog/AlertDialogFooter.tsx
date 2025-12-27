import { cn } from "../../../lib/utils";

type AlertDialogFooterProps = React.ComponentProps<"div">;

export function AlertDialogFooter({
  className,
  ...props
}: AlertDialogFooterProps) {
  return <div className={cn("alert-dialog__footer", className)} {...props} />;
}
