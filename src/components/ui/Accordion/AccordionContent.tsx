import * as AccordionPrimitive from "@radix-ui/react-accordion";

import { cn } from "../../../lib/utils";

type AccordionContentProps = React.ComponentProps<
  typeof AccordionPrimitive.Content
>;

export function AccordionContent({
  className,
  children,
  ...props
}: AccordionContentProps) {
  return (
    <AccordionPrimitive.Content
      className={cn("accordion__content", className)}
      {...props}
    >
      <div className="accordion__content-wrapper">{children}</div>
    </AccordionPrimitive.Content>
  );
}
