import { cn } from "../../../lib/utils";

type SheetHeaderProps = React.ComponentProps<"div">;

export function SheetHeader({ className, ...props }: SheetHeaderProps) {
  return (
    <div
      data-slot="sheet-header"
      className={cn("sheet__header", className)}
      {...props}
    />
  );
}
