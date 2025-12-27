import * as AccordionPrimitive from "@radix-ui/react-accordion";

import { cn } from "../../../lib/utils";

type AccordionItemProps = React.ComponentProps<typeof AccordionPrimitive.Item>;

export function AccordionItem({ className, ...props }: AccordionItemProps) {
  return (
    <AccordionPrimitive.Item
      className={cn("accordion__item", className)}
      {...props}
    />
  );
}
