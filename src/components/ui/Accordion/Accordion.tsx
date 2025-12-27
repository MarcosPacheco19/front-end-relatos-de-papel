import * as AccordionPrimitive from "@radix-ui/react-accordion";

import { cn } from "../../../lib/utils";
import "./Accordion.css";

type AccordionProps = React.ComponentProps<typeof AccordionPrimitive.Root>;

export function Accordion({ className, ...props }: AccordionProps) {
  return (
    <AccordionPrimitive.Root
      className={cn("accordion", className)}
      {...props}
    />
  );
}
