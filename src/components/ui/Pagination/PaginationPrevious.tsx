import { ChevronLeftIcon } from "lucide-react";
import { cn } from "../../../lib/utils";
import { PaginationLink } from "./PaginationLink";

type PaginationPreviousProps = React.ComponentProps<typeof PaginationLink>;

export function PaginationPrevious({
  className,
  ...props
}: PaginationPreviousProps) {
  return (
    <PaginationLink
      aria-label="Go to previous page"
      size="default"
      className={cn("gap-1 px-2.5 sm:pl-2.5", className)}
      {...props}
    >
      <ChevronLeftIcon />
      <span className="hidden sm:block">Previous</span>
    </PaginationLink>
  );
}
