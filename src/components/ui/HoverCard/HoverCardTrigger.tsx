import * as HoverCardPrimitive from "@radix-ui/react-hover-card";

type HoverCardTriggerProps = React.ComponentProps<
  typeof HoverCardPrimitive.Trigger
>;

export function HoverCardTrigger(props: HoverCardTriggerProps) {
  return <HoverCardPrimitive.Trigger {...props} />;
}
