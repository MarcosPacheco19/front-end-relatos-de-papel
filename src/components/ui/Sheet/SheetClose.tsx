import * as SheetPrimitive from "@radix-ui/react-dialog";

type SheetCloseProps = React.ComponentProps<typeof SheetPrimitive.Close>;

export function SheetClose(props: SheetCloseProps) {
  return <SheetPrimitive.Close data-slot="sheet-close" {...props} />;
}
