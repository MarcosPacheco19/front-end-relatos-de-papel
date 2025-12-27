import { ChevronRightIcon } from "lucide-react";
import { cn } from "../../../lib/utils";
import { PaginationLink } from "./PaginationLink";

type PaginationNextProps = React.ComponentProps<typeof PaginationLink>;

export function PaginationNext({ className, ...props }: PaginationNextProps) {
  return (
    <PaginationLink
      aria-label="Go to next page"
      size="default"
      className={cn("gap-1 px-2.5 sm:pr-2.5", className)}
      {...props}
    >
      <span className="hidden sm:block">Next</span>
      <ChevronRightIcon />
    </PaginationLink>
  );
}
