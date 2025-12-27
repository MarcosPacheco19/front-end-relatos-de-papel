import { cn } from "../../../lib/utils";
import { useFormField } from "./form.hooks";

type FormMessageProps = React.ComponentProps<"p">;

export function FormMessage({ className, ...props }: FormMessageProps) {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message ?? "") : props.children;

  if (!body) {
    return null;
  }

  return (
    <p id={formMessageId} className={cn("form__message", className)} {...props}>
      {body}
    </p>
  );
}
