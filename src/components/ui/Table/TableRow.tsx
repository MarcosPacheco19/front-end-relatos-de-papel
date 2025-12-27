import { cn } from "../../../lib/utils";

type TableRowProps = React.ComponentProps<"tr">;

export function TableRow({ className, ...props }: TableRowProps) {
  return (
    <tr
      data-slot="table-row"
      className={cn("table__row", className)}
      {...props}
    />
  );
}
