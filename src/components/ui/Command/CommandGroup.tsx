import { Command as CommandPrimitive } from "cmdk";
import { cn } from "../../../lib/utils";

type CommandGroupProps = React.ComponentProps<typeof CommandPrimitive.Group>;

export function CommandGroup({ className, ...props }: CommandGroupProps) {
  return (
    <CommandPrimitive.Group
      className={cn(
        "command__group [&_[cmdk-group-heading]]:command__group-heading",
        className
      )}
      {...props}
    />
  );
}
