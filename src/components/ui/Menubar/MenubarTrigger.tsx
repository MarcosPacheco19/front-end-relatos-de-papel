import * as MenubarPrimitive from "@radix-ui/react-menubar";
import { cn } from "../../../lib/utils";

type MenubarTriggerProps = React.ComponentProps<
  typeof MenubarPrimitive.Trigger
>;

export function MenubarTrigger({ className, ...props }: MenubarTriggerProps) {
  return (
    <MenubarPrimitive.Trigger
      data-slot="menubar-trigger"
      className={cn("menubar__trigger", className)}
      {...props}
    />
  );
}
