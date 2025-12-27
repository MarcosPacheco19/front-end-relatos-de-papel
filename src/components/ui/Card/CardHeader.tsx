import { cn } from "../../../lib/utils";

type CardHeaderProps = React.ComponentProps<"div">;

export function CardHeader({ className, ...props }: CardHeaderProps) {
  return <div className={cn("card__header", className)} {...props} />;
}
