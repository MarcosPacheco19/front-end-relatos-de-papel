import { cn } from "../../../lib/utils";

type TableHeadProps = React.ComponentProps<"th">;

export function TableHead({ className, ...props }: TableHeadProps) {
  return (
    <th
      data-slot="table-head"
      className={cn("table__head", className)}
      {...props}
    />
  );
}
