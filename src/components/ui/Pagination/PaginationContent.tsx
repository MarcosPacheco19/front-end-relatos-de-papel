import { cn } from "../../../lib/utils";

type PaginationContentProps = React.ComponentProps<"ul">;

export function PaginationContent({
  className,
  ...props
}: PaginationContentProps) {
  return (
    <ul
      data-slot="pagination-content"
      className={cn("pagination__content", className)}
      {...props}
    />
  );
}
