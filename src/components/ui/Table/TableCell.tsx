import { cn } from "../../../lib/utils";

type TableCellProps = React.ComponentProps<"td">;

export function TableCell({ className, ...props }: TableCellProps) {
  return (
    <td
      data-slot="table-cell"
      className={cn("table__cell", className)}
      {...props}
    />
  );
}
