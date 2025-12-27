import * as MenubarPrimitive from "@radix-ui/react-menubar";
import { cn } from "../../../lib/utils";
import "./Menubar.css";

type MenubarProps = React.ComponentProps<typeof MenubarPrimitive.Root>;

export function Menubar({ className, ...props }: MenubarProps) {
  return (
    <MenubarPrimitive.Root
      data-slot="menubar"
      className={cn("menubar", className)}
      {...props}
    />
  );
}
