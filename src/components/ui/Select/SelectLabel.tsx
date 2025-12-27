import * as SelectPrimitive from "@radix-ui/react-select";
import { cn } from "../../../lib/utils";

type SelectLabelProps = React.ComponentProps<typeof SelectPrimitive.Label>;

export function SelectLabel({ className, ...props }: SelectLabelProps) {
  return (
    <SelectPrimitive.Label
      data-slot="select-label"
      className={cn("select__label", className)}
      {...props}
    />
  );
}
