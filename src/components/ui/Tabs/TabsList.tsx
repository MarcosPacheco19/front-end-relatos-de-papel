import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "../../../lib/utils";

type TabsListProps = React.ComponentProps<typeof TabsPrimitive.List>;

export function TabsList({ className, ...props }: TabsListProps) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn("tabs__list", className)}
      {...props}
    />
  );
}
