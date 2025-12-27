import { cn } from "../../../lib/utils";

type CommandShortcutProps = React.ComponentProps<"span">;

export function CommandShortcut({ className, ...props }: CommandShortcutProps) {
  return <span className={cn("command__shortcut", className)} {...props} />;
}
