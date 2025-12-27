import { cn } from "../../../lib/utils";

type TableFooterProps = React.ComponentProps<"tfoot">;

export function TableFooter({ className, ...props }: TableFooterProps) {
  return (
    <tfoot
      data-slot="table-footer"
      className={cn("table__footer", className)}
      {...props}
    />
  );
}
