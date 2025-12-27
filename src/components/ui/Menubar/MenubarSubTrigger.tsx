import * as MenubarPrimitive from "@radix-ui/react-menubar";
import { ChevronRightIcon } from "lucide-react";
import { cn } from "../../../lib/utils";

type MenubarSubTriggerProps = React.ComponentProps<
  typeof MenubarPrimitive.SubTrigger
> & {
  inset?: boolean;
};

export function MenubarSubTrigger({
  className,
  inset,
  children,
  ...props
}: MenubarSubTriggerProps) {
  return (
    <MenubarPrimitive.SubTrigger
      data-slot="menubar-sub-trigger"
      data-inset={inset}
      className={cn("menubar__sub-trigger", className)}
      {...props}
    >
      {children}
      <ChevronRightIcon className="ml-auto h-4 w-4" />
    </MenubarPrimitive.SubTrigger>
  );
}
