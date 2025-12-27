import { cn } from "../../../lib/utils";
import { useCarousel } from "./CarouselContext";

type CarouselContentProps = React.ComponentProps<"div">;

export function CarouselContent({ className, ...props }: CarouselContentProps) {
  const { carouselRef, orientation } = useCarousel();

  return (
    <div ref={carouselRef} className="carousel__content">
      <div
        className={cn(
          "carousel__content-wrapper",
          orientation === "horizontal"
            ? "carousel__content-wrapper--horizontal"
            : "carousel__content-wrapper--vertical",
          className
        )}
        {...props}
      />
    </div>
  );
}
