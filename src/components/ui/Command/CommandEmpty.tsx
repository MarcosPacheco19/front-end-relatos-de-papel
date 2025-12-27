import { Command as CommandPrimitive } from "cmdk";

type CommandEmptyProps = React.ComponentProps<typeof CommandPrimitive.Empty>;

export function CommandEmpty(props: CommandEmptyProps) {
  return <CommandPrimitive.Empty className="command__empty" {...props} />;
}
