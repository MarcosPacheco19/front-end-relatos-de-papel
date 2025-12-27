import { Command as CommandPrimitive } from "cmdk";
import { cn } from "../../../lib/utils";
import "./Command.css";

type CommandProps = React.ComponentProps<typeof CommandPrimitive>;

export function Command({ className, ...props }: CommandProps) {
  return <CommandPrimitive className={cn("command", className)} {...props} />;
}
