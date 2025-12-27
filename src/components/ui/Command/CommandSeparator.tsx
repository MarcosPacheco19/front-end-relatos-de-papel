import { Command as CommandPrimitive } from "cmdk";
import { cn } from "../../../lib/utils";

type CommandSeparatorProps = React.ComponentProps<
  typeof CommandPrimitive.Separator
>;

export function CommandSeparator({
  className,
  ...props
}: CommandSeparatorProps) {
  return (
    <CommandPrimitive.Separator
      className={cn("command__separator", className)}
      {...props}
    />
  );
}
