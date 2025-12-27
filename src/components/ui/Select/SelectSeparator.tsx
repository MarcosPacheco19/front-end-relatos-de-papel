import * as SelectPrimitive from "@radix-ui/react-select";
import { cn } from "../../../lib/utils";

type SelectSeparatorProps = React.ComponentProps<
  typeof SelectPrimitive.Separator
>;

export function SelectSeparator({ className, ...props }: SelectSeparatorProps) {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={cn("select__separator", className)}
      {...props}
    />
  );
}
