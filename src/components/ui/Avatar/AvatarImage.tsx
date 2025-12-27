import * as AvatarPrimitive from "@radix-ui/react-avatar";

import { cn } from "../../../lib/utils";

type AvatarImageProps = React.ComponentProps<typeof AvatarPrimitive.Image>;

export function AvatarImage({ className, ...props }: AvatarImageProps) {
  return (
    <AvatarPrimitive.Image
      className={cn("avatar__image", className)}
      {...props}
    />
  );
}
