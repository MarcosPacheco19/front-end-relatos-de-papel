import { ChevronRight } from "lucide-react";

import { cn } from "../../../lib/utils";

type BreadcrumbSeparatorProps = React.ComponentProps<"li">;

export function BreadcrumbSeparator({
  children,
  className,
  ...props
}: BreadcrumbSeparatorProps) {
  return (
    <li
      role="presentation"
      aria-hidden="true"
      className={cn("breadcrumb__separator", className)}
      {...props}
    >
      {children ?? <ChevronRight />}
    </li>
  );
}
