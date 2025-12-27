import * as MenubarPrimitive from "@radix-ui/react-menubar";
import { cn } from "../../../lib/utils";
import { MenubarPortal } from "./MenubarPortal";

type MenubarContentProps = React.ComponentProps<
  typeof MenubarPrimitive.Content
>;

export function MenubarContent({
  className,
  align = "start",
  alignOffset = -4,
  sideOffset = 8,
  ...props
}: MenubarContentProps) {
  return (
    <MenubarPortal>
      <MenubarPrimitive.Content
        data-slot="menubar-content"
        align={align}
        alignOffset={alignOffset}
        sideOffset={sideOffset}
        className={cn("menubar__content", className)}
        {...props}
      />
    </MenubarPortal>
  );
}
