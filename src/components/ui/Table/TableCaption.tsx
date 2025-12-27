import { cn } from "../../../lib/utils";

type TableCaptionProps = React.ComponentProps<"caption">;

export function TableCaption({ className, ...props }: TableCaptionProps) {
  return (
    <caption
      data-slot="table-caption"
      className={cn("table__caption", className)}
      {...props}
    />
  );
}
