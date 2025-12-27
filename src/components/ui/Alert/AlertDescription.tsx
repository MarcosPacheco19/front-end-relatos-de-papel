import { cn } from "../../../lib/utils";

type AlertDescriptionProps = React.ComponentProps<"div">;

export function AlertDescription({
  className,
  ...props
}: AlertDescriptionProps) {
  return <div className={cn("alert__description", className)} {...props} />;
}
