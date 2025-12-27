import { cn } from "../../../lib/utils";

type CardContentProps = React.ComponentProps<"div">;

export function CardContent({ className, ...props }: CardContentProps) {
  return <div className={cn("card__content", className)} {...props} />;
}
