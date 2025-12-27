import { cn } from "../../../lib/utils";
import "./Pagination.css";

type PaginationProps = React.ComponentProps<"nav">;

export function Pagination({ className, ...props }: PaginationProps) {
  return (
    <nav
      role="navigation"
      aria-label="pagination"
      data-slot="pagination"
      className={cn("pagination", className)}
      {...props}
    />
  );
}
