import { useId } from "react";
import { cn } from "../../../lib/utils";
import { FormItemContext } from "./form.hooks";
import "./Form.css";

type FormItemProps = React.ComponentProps<"div">;

export function FormItem({ className, ...props }: FormItemProps) {
  const id = useId();

  return (
    <FormItemContext.Provider value={{ id }}>
      <div className={cn("form__item", className)} {...props} />
    </FormItemContext.Provider>
  );
}
