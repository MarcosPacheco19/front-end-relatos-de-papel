import * as SheetPrimitive from "@radix-ui/react-dialog";
import { cn } from "../../../lib/utils";

type SheetDescriptionProps = React.ComponentProps<
  typeof SheetPrimitive.Description
>;

export function SheetDescription({
  className,
  ...props
}: SheetDescriptionProps) {
  return (
    <SheetPrimitive.Description
      data-slot="sheet-description"
      className={cn("sheet__description", className)}
      {...props}
    />
  );
}
