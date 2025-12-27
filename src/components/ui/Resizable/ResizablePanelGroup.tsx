import { Group } from "react-resizable-panels";
import { cn } from "../../../lib/utils";
import "./Resizable.css";

type ResizablePanelGroupProps = React.ComponentProps<typeof Group>;

export function ResizablePanelGroup({
  className,
  ...props
}: ResizablePanelGroupProps) {
  return (
    <Group
      data-slot="resizable-panel-group"
      className={cn("resizable-panel-group", className)}
      {...props}
    />
  );
}
