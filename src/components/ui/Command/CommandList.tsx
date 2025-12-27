import { Command as CommandPrimitive } from "cmdk";
import { cn } from "../../../lib/utils";

type CommandListProps = React.ComponentProps<typeof CommandPrimitive.List>;

export function CommandList({ className, ...props }: CommandListProps) {
  return (
    <CommandPrimitive.List
      className={cn("command__list", className)}
      {...props}
    />
  );
}
