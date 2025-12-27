import { cn } from "../../../lib/utils";

type TableBodyProps = React.ComponentProps<"tbody">;

export function TableBody({ className, ...props }: TableBodyProps) {
  return (
    <tbody
      data-slot="table-body"
      className={cn("table__body", className)}
      {...props}
    />
  );
}
