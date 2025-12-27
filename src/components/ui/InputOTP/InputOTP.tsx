import { OTPInput } from "input-otp";
import { cn } from "../../../lib/utils";
import "./InputOTP.css";

type InputOTPProps = React.ComponentProps<typeof OTPInput> & {
  containerClassName?: string;
};

export function InputOTP({
  className,
  containerClassName,
  ...props
}: InputOTPProps) {
  return (
    <OTPInput
      containerClassName={cn("input-otp__container", containerClassName)}
      className={cn("input-otp", className)}
      {...props}
    />
  );
}
