import { cn } from "../../../lib/utils";

type CardDescriptionProps = React.ComponentProps<"div">;

export function CardDescription({ className, ...props }: CardDescriptionProps) {
  return <p className={cn("card__description", className)} {...props} />;
}
