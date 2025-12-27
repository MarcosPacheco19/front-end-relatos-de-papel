import { cn } from "../../../lib/utils";

type BreadcrumbListProps = React.ComponentProps<"ol">;

export function BreadcrumbList({ className, ...props }: BreadcrumbListProps) {
  return <ol className={cn("breadcrumb__list", className)} {...props} />;
}
