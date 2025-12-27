import "./Breadcrumb.css";

type BreadcrumbProps = React.ComponentProps<"nav">;

export function Breadcrumb({ ...props }: BreadcrumbProps) {
  return <nav aria-label="breadcrumb" {...props} />;
}
