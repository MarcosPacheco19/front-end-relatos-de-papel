import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "../../../lib/utils";

type TabsContentProps = React.ComponentProps<typeof TabsPrimitive.Content>;

export function TabsContent({ className, ...props }: TabsContentProps) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("tabs__content", className)}
      {...props}
    />
  );
}
