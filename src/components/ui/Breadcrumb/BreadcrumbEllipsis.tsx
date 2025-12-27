import { MoreHorizontal } from "lucide-react";

import { cn } from "../../../lib/utils";

type BreadcrumbEllipsisProps = React.ComponentProps<"span">;

export function BreadcrumbEllipsis({
  className,
  ...props
}: BreadcrumbEllipsisProps) {
  return (
    <span
      role="presentation"
      aria-hidden="true"
      className={cn("breadcrumb__ellipsis", className)}
      {...props}
    >
      <MoreHorizontal className="size-4" />
      <span className="sr-only">More</span>
    </span>
  );
}
