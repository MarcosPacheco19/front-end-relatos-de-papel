import { Command as CommandPrimitive } from "cmdk";
import { SearchIcon } from "lucide-react";
import { cn } from "../../../lib/utils";

type CommandInputProps = React.ComponentProps<typeof CommandPrimitive.Input>;

export function CommandInput({ className, ...props }: CommandInputProps) {
  return (
    <div className="command__input-wrapper">
      <SearchIcon className="command__input-icon" />
      <CommandPrimitive.Input
        className={cn("command__input", className)}
        {...props}
      />
    </div>
  );
}
