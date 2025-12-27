import { cn } from "../../../lib/utils";

type BreadcrumbItemProps = React.ComponentProps<"li">;

export function BreadcrumbItem({ className, ...props }: BreadcrumbItemProps) {
  return <li className={cn("breadcrumb__item", className)} {...props} />;
}
