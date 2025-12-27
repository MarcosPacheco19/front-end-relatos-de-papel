import { cn } from "../../../lib/utils";
import "./Card.css";

type CardProps = React.ComponentProps<"div">;

export function Card({ className, ...props }: CardProps) {
  return <div className={cn("card", className)} {...props} />;
}
