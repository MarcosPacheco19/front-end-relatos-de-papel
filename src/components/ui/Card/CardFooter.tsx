import { cn } from "../../../lib/utils";

type CardFooterProps = React.ComponentProps<"div">;

export function CardFooter({ className, ...props }: CardFooterProps) {
  return <div className={cn("card__footer", className)} {...props} />;
}
