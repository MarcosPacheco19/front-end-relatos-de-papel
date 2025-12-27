import { cn } from "../../../lib/utils";

type TableHeaderProps = React.ComponentProps<"thead">;

export function TableHeader({ className, ...props }: TableHeaderProps) {
  return (
    <thead
      data-slot="table-header"
      className={cn("table__header", className)}
      {...props}
    />
  );
}
