import { cn } from "../../../lib/utils";

type SidebarInsetProps = React.ComponentProps<"main">;

export function SidebarInset({ className, ...props }: SidebarInsetProps) {
  return (
    <main
      data-slot="sidebar-inset"
      className={cn("sidebar__inset", className)}
      {...props}
    />
  );
}
