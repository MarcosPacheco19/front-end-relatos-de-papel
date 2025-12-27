import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { cn } from "../../../lib/utils";
import "./Separator.css";

type SeparatorProps = React.ComponentProps<typeof SeparatorPrimitive.Root>;

export function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: SeparatorProps) {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator-root"
      decorative={decorative}
      orientation={orientation}
      className={cn("separator", className)}
      {...props}
    />
  );
}
