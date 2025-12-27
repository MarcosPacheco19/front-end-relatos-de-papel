import * as AvatarPrimitive from "@radix-ui/react-avatar";

import { cn } from "../../../lib/utils";

type AvatarFallbackProps = React.ComponentProps<
  typeof AvatarPrimitive.Fallback
>;

export function AvatarFallback({ className, ...props }: AvatarFallbackProps) {
  return (
    <AvatarPrimitive.Fallback
      className={cn("avatar__fallback", className)}
      {...props}
    />
  );
}
