import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "lucide-react";

import { cn } from "../../../lib/utils";

type AccordionTriggerProps = React.ComponentProps<
  typeof AccordionPrimitive.Trigger
>;

export function AccordionTrigger({
  className,
  children,
  ...props
}: AccordionTriggerProps) {
  return (
    <AccordionPrimitive.Header className="accordion__header">
      <AccordionPrimitive.Trigger
        className={cn("accordion__trigger", className)}
        {...props}
      >
        {children}
        <ChevronDownIcon className="accordion__icon" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}
