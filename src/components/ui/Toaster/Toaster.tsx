import { Toaster as Sonner } from "sonner";
import type { ToasterProps } from "sonner";
import "./Toaster.css";

type ToasterComponentProps = ToasterProps;

export function Toaster({ ...props }: ToasterComponentProps) {
  return (
    <Sonner
      className="toaster group"
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
        } as React.CSSProperties
      }
      {...props}
    />
  );
}
