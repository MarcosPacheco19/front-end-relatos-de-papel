import * as SwitchPrimitive from "@radix-ui/react-switch";
import { cn } from "../../../lib/utils";
import "./Switch.css";

type SwitchProps = React.ComponentProps<typeof SwitchPrimitive.Root>;

export function Switch({ className, ...props }: SwitchProps) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn("switch", className)}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className="switch__thumb"
      />
    </SwitchPrimitive.Root>
  );
}
