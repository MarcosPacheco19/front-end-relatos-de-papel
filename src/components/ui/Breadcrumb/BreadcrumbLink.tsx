import { Slot } from "@radix-ui/react-slot";

import { cn } from "../../../lib/utils";

type BreadcrumbLinkProps = React.ComponentProps<"a"> & {
  asChild?: boolean;
};

export function BreadcrumbLink({
  asChild,
  className,
  ...props
}: BreadcrumbLinkProps) {
  const Comp = asChild ? Slot : "a";

  return <Comp className={cn("breadcrumb__link", className)} {...props} />;
}
