import * as SheetPrimitive from "@radix-ui/react-dialog";

type SheetPortalProps = React.ComponentProps<typeof SheetPrimitive.Portal>;

export function SheetPortal(props: SheetPortalProps) {
  return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />;
}
