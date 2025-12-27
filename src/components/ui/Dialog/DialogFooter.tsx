import { cn } from "../../../lib/utils";

type DialogFooterProps = React.ComponentProps<"div">;

export function DialogFooter({ className, ...props }: DialogFooterProps) {
  return <div className={cn("dialog__footer", className)} {...props} />;
}
