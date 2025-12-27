import * as MenubarPrimitive from "@radix-ui/react-menubar";

type MenubarRadioGroupProps = React.ComponentProps<
  typeof MenubarPrimitive.RadioGroup
>;

export function MenubarRadioGroup(props: MenubarRadioGroupProps) {
  return (
    <MenubarPrimitive.RadioGroup data-slot="menubar-radio-group" {...props} />
  );
}
