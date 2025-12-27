import { cn } from "../../../lib/utils";

type AlertTitleProps = React.ComponentProps<"div">;

export function AlertTitle({ className, ...props }: AlertTitleProps) {
  return <div className={cn("alert__title", className)} {...props} />;
}
