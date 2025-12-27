import { Separator } from "react-resizable-panels";
import { GripVerticalIcon } from "lucide-react";
import { cn } from "../../../lib/utils";

type ResizableHandleProps = React.ComponentProps<typeof Separator> & {
  withHandle?: boolean;
};

export function ResizableHandle({
  withHandle,
  className,
  ...props
}: ResizableHandleProps) {
  return (
    <Separator
      data-slot="resizable-handle"
      className={cn("resizable-handle", className)}
      {...props}
    >
      {withHandle && (
        <div className="resizable-handle__grip">
          <GripVerticalIcon className="size-2.5" />
        </div>
      )}
    </Separator>
  );
}
