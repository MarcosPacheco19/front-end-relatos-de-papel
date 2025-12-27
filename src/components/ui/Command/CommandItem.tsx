import { Command as CommandPrimitive } from "cmdk";
import { cn } from "../../../lib/utils";

type CommandItemProps = React.ComponentProps<typeof CommandPrimitive.Item>;

export function CommandItem({ className, ...props }: CommandItemProps) {
  return (
    <CommandPrimitive.Item
      className={cn("command__item", className)}
      {...props}
    />
  );
}
