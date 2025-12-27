import * as MenubarPrimitive from "@radix-ui/react-menubar";
import { cn } from "../../../lib/utils";

type MenubarSubContentProps = React.ComponentProps<
  typeof MenubarPrimitive.SubContent
>;

export function MenubarSubContent({
  className,
  ...props
}: MenubarSubContentProps) {
  return (
    <MenubarPrimitive.SubContent
      data-slot="menubar-sub-content"
      className={cn("menubar__sub-content", className)}
      {...props}
    />
  );
}
