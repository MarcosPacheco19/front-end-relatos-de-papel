import * as SheetPrimitive from "@radix-ui/react-dialog";
import "./Sheet.css";

type SheetProps = React.ComponentProps<typeof SheetPrimitive.Root>;

export function Sheet(props: SheetProps) {
  return <SheetPrimitive.Root data-slot="sheet" {...props} />;
}
