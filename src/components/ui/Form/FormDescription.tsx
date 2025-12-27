import { cn } from "../../../lib/utils";
import { useFormField } from "./form.hooks";

type FormDescriptionProps = React.ComponentProps<"p">;

export function FormDescription({ className, ...props }: FormDescriptionProps) {
  const { formDescriptionId } = useFormField();

  return (
    <p
      id={formDescriptionId}
      className={cn("form__description", className)}
      {...props}
    />
  );
}
