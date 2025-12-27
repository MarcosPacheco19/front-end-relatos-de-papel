import { cn } from "../../../lib/utils";
import { useCarousel } from "./CarouselContext";

type CarouselItemProps = React.ComponentProps<"div">;

export function CarouselItem({ className, ...props }: CarouselItemProps) {
  const { orientation } = useCarousel();

  return (
    <div
      role="group"
      aria-roledescription="slide"
      className={cn(
        "carousel__item",
        orientation === "horizontal"
          ? "carousel__item--horizontal"
          : "carousel__item--vertical",
        className
      )}
      {...props}
    />
  );
}
