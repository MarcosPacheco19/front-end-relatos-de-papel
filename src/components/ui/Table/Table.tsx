import { cn } from "../../../lib/utils";
import "./Table.css";

type TableProps = React.ComponentProps<"table">;

export function Table({ className, ...props }: TableProps) {
  return (
    <div data-slot="table-container" className="table-container">
      <table data-slot="table" className={cn("table", className)} {...props} />
    </div>
  );
}
