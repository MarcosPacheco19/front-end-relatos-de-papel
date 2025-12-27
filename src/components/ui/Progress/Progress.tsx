import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "../../../lib/utils";
import "./Progress.css";

type ProgressProps = React.ComponentProps<typeof ProgressPrimitive.Root>;

export function Progress({ className, value, ...props }: ProgressProps) {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn("progress", className)}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className="progress__indicator"
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  );
}
