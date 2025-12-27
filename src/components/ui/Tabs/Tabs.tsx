import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "../../../lib/utils";
import "./Tabs.css";

type TabsProps = React.ComponentProps<typeof TabsPrimitive.Root>;

export function Tabs({ className, ...props }: TabsProps) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("tabs", className)}
      {...props}
    />
  );
}
