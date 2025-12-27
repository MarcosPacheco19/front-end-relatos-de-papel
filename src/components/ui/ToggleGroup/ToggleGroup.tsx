import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import { cn } from "../../../lib/utils";
import type { ToggleVariants } from "../Toggle/toggle.variants";
import { ToggleGroupContext } from "./ToggleGroupContext";
import "./ToggleGroup.css";

type ToggleGroupProps = React.ComponentProps<typeof ToggleGroupPrimitive.Root> &
  ToggleVariants;

export function ToggleGroup({
  className,
  variant,
  size,
  children,
  ...props
}: ToggleGroupProps) {
  return (
    <ToggleGroupPrimitive.Root
      data-slot="toggle-group"
      data-variant={variant}
      data-size={size}
      className={cn("toggle-group group/toggle-group", className)}
      {...props}
    >
      <ToggleGroupContext.Provider value={{ variant, size }}>
        {children}
      </ToggleGroupContext.Provider>
    </ToggleGroupPrimitive.Root>
  );
}
