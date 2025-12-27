import * as MenubarPrimitive from "@radix-ui/react-menubar";
import { cn } from "../../../lib/utils";

type MenubarLabelProps = React.ComponentProps<typeof MenubarPrimitive.Label> & {
  inset?: boolean;
};

export function MenubarLabel({
  className,
  inset,
  ...props
}: MenubarLabelProps) {
  return (
    <MenubarPrimitive.Label
      data-slot="menubar-label"
      data-inset={inset}
      className={cn("menubar__label", className)}
      {...props}
    />
  );
}
