import { cn } from "../../../lib/utils";

type BreadcrumbPageProps = React.ComponentProps<"span">;

export function BreadcrumbPage({ className, ...props }: BreadcrumbPageProps) {
  return (
    <span
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={cn("breadcrumb__page", className)}
      {...props}
    />
  );
}
