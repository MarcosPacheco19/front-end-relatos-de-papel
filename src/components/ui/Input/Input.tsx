import { cn } from "../../../lib/utils";
import "./Input.css";

type InputProps = React.ComponentProps<"input">;

export function Input({ className, type, ...props }: InputProps) {
  return <input type={type} className={cn("input", className)} {...props} />;
}
