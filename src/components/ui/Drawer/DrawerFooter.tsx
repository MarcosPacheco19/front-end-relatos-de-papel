import { cn } from "../../../lib/utils";

type DrawerFooterProps = React.ComponentProps<"div">;

export function DrawerFooter({ className, ...props }: DrawerFooterProps) {
  return <div className={cn("drawer__footer", className)} {...props} />;
}
