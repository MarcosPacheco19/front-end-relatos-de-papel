import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "../../../lib/utils";

type TabsTriggerProps = React.ComponentProps<typeof TabsPrimitive.Trigger>;

export function TabsTrigger({ className, ...props }: TabsTriggerProps) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn("tabs__trigger", className)}
      {...props}
    />
  );
}
