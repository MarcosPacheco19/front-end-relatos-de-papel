import { cn } from "../../../lib/utils";

type MenubarShortcutProps = React.ComponentProps<"span">;

export function MenubarShortcut({ className, ...props }: MenubarShortcutProps) {
  return (
    <span
      data-slot="menubar-shortcut"
      className={cn("menubar__shortcut", className)}
      {...props}
    />
  );
}
