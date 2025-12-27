import { cn } from "../../../lib/utils";

type ContextMenuShortcutProps = React.ComponentProps<"span">;

export function ContextMenuShortcut({
  className,
  ...props
}: ContextMenuShortcutProps) {
  return (
    <span className={cn("context-menu__shortcut", className)} {...props} />
  );
}
