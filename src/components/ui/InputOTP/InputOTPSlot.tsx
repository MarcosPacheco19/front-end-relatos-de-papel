import { useContext } from "react";
import { OTPInputContext } from "input-otp";
import { cn } from "../../../lib/utils";

type InputOTPSlotProps = React.ComponentProps<"div"> & {
  index: number;
};

export function InputOTPSlot({
  index,
  className,
  ...props
}: InputOTPSlotProps) {
  const inputOTPContext = useContext(OTPInputContext);
  const slot = inputOTPContext?.slots?.[index];
  const { char, hasFakeCaret, isActive } = slot ?? {};

  return (
    <div
      data-active={isActive}
      className={cn("input-otp__slot", className)}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="input-otp__caret">
          <div className="input-otp__caret-line" />
        </div>
      )}
    </div>
  );
}
