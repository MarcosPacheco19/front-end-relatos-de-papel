import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import "./HoverCard.css";

type HoverCardProps = React.ComponentProps<typeof HoverCardPrimitive.Root>;

export function HoverCard(props: HoverCardProps) {
  return <HoverCardPrimitive.Root {...props} />;
}
