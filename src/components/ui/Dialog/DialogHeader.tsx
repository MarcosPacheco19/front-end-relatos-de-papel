import { cn } from "../../../lib/utils";

type DialogHeaderProps = React.ComponentProps<"div">;

export function DialogHeader({ className, ...props }: DialogHeaderProps) {
  return <div className={cn("dialog__header", className)} {...props} />;
}
