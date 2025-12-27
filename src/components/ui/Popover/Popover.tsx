import * as PopoverPrimitive from "@radix-ui/react-popover";
import "./Popover.css";

type PopoverProps = React.ComponentProps<typeof PopoverPrimitive.Root>;

export function Popover(props: PopoverProps) {
  return <PopoverPrimitive.Root data-slot="popover" {...props} />;
}
