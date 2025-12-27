import { cn } from "../../../lib/utils";

type DropdownMenuShortcutProps = React.ComponentProps<"span">;

export function DropdownMenuShortcut({
  className,
  ...props
}: DropdownMenuShortcutProps) {
  return (
    <span className={cn("dropdown-menu__shortcut", className)} {...props} />
  );
}
