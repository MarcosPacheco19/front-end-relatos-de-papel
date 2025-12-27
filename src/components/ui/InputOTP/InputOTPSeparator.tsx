import { MinusIcon } from "lucide-react";

type InputOTPSeparatorProps = React.ComponentProps<"div">;

export function InputOTPSeparator(props: InputOTPSeparatorProps) {
  return (
    <div className="input-otp__separator" role="separator" {...props}>
      <MinusIcon />
    </div>
  );
}
