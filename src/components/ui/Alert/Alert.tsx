import { type VariantProps } from "class-variance-authority";

import { cn } from "../../../lib/utils";
import { alertVariants } from "./Alert.variants";
import "./Alert.css";

type AlertProps = React.ComponentProps<"div"> &
  VariantProps<typeof alertVariants>;

export function Alert({ className, variant, ...props }: AlertProps) {
  return (
    <div
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  );
}

export { alertVariants };
