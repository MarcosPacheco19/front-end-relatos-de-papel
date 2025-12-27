import * as SelectPrimitive from "@radix-ui/react-select";
import "./Select.css";

type SelectProps = React.ComponentProps<typeof SelectPrimitive.Root>;

export function Select(props: SelectProps) {
  return <SelectPrimitive.Root data-slot="select" {...props} />;
}
