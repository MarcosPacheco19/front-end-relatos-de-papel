import { cn } from "../../../lib/utils";

type InputOTPGroupProps = React.ComponentProps<"div">;

export function InputOTPGroup({ className, ...props }: InputOTPGroupProps) {
  return <div className={cn("input-otp__group", className)} {...props} />;
}
