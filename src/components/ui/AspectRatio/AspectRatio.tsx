import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio";

type AspectRatioProps = React.ComponentProps<typeof AspectRatioPrimitive.Root>;

export function AspectRatio({ ...props }: AspectRatioProps) {
  return <AspectRatioPrimitive.Root {...props} />;
}
