import { MoreHorizontalIcon } from "lucide-react";
import { cn } from "../../../lib/utils";

type PaginationEllipsisProps = React.ComponentProps<"span">;

export function PaginationEllipsis({
  className,
  ...props
}: PaginationEllipsisProps) {
  return (
    <span
      aria-hidden
      data-slot="pagination-ellipsis"
      className={cn("pagination__ellipsis", className)}
      {...props}
    >
      <MoreHorizontalIcon className="size-4" />
      <span className="sr-only">More pages</span>
    </span>
  );
}
