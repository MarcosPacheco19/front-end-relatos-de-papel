import * as LabelPrimitive from "@radix-ui/react-label";
import { cn } from "../../../lib/utils";
import "./Label.css";

type LabelProps = React.ComponentProps<typeof LabelPrimitive.Root>;

export function Label({ className, ...props }: LabelProps) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn("label", className)}
      {...props}
    />
  );
}
