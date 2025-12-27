import * as PopoverPrimitive from "@radix-ui/react-popover";

type PopoverAnchorProps = React.ComponentProps<typeof PopoverPrimitive.Anchor>;

export function PopoverAnchor(props: PopoverAnchorProps) {
  return <PopoverPrimitive.Anchor data-slot="popover-anchor" {...props} />;
}
