import { cn } from "../../../lib/utils";

type SheetFooterProps = React.ComponentProps<"div">;

export function SheetFooter({ className, ...props }: SheetFooterProps) {
  return (
    <div
      data-slot="sheet-footer"
      className={cn("sheet__footer", className)}
      {...props}
    />
  );
}
