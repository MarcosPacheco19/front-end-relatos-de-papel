import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { cn } from "../../../lib/utils";
import "./RadioGroup.css";

type RadioGroupProps = React.ComponentProps<typeof RadioGroupPrimitive.Root>;

export function RadioGroup({ className, ...props }: RadioGroupProps) {
  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-group"
      className={cn("radio-group", className)}
      {...props}
    />
  );
}
