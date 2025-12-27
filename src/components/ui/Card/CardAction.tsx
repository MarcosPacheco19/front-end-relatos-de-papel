import { cn } from "../../../lib/utils";

type CardActionProps = React.ComponentProps<"div">;

export function CardAction({ className, ...props }: CardActionProps) {
  return <div className={cn("card__action", className)} {...props} />;
}
