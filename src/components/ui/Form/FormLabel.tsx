import * as LabelPrimitive from "@radix-ui/react-label";
import { cn } from "../../../lib/utils";
import { useFormField } from "./form.hooks";
import { Label } from "../Label";

type FormLabelProps = React.ComponentProps<typeof LabelPrimitive.Root>;

export function FormLabel({ className, ...props }: FormLabelProps) {
  const { error, formItemId } = useFormField();

  return (
    <Label
      data-error={!!error}
      className={cn("form__label", className)}
      htmlFor={formItemId}
      {...props}
    />
  );
}
