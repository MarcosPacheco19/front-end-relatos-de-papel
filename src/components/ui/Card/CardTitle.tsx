import { cn } from "../../../lib/utils";

type CardTitleProps = React.ComponentProps<"div">;

export function CardTitle({ className, ...props }: CardTitleProps) {
  return <h4 className={cn("card__title", className)} {...props} />;
}
