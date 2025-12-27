import * as SheetPrimitive from "@radix-ui/react-dialog";
import { cn } from "../../../lib/utils";

type SheetTitleProps = React.ComponentProps<typeof SheetPrimitive.Title>;

export function SheetTitle({ className, ...props }: SheetTitleProps) {
  return (
    <SheetPrimitive.Title
      data-slot="sheet-title"
      className={cn("sheet__title", className)}
      {...props}
    />
  );
}
