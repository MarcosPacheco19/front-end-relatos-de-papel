import * as MenubarPrimitive from "@radix-ui/react-menubar";
import { cn } from "../../../lib/utils";

type MenubarSeparatorProps = React.ComponentProps<
  typeof MenubarPrimitive.Separator
>;

export function MenubarSeparator({
  className,
  ...props
}: MenubarSeparatorProps) {
  return (
    <MenubarPrimitive.Separator
      data-slot="menubar-separator"
      className={cn("menubar__separator", className)}
      {...props}
    />
  );
}
