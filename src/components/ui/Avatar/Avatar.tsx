import * as AvatarPrimitive from "@radix-ui/react-avatar";

import { cn } from "../../../lib/utils";
import "./Avatar.css";

type AvatarProps = React.ComponentProps<typeof AvatarPrimitive.Root>;

export function Avatar({ className, ...props }: AvatarProps) {
  return (
    <AvatarPrimitive.Root className={cn("avatar", className)} {...props} />
  );
}
