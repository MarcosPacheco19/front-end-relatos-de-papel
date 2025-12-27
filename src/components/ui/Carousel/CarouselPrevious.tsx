import { ArrowLeft } from "lucide-react";

import { cn } from "../../../lib/utils";
import { Button } from "../Button/Button";
import { useCarousel } from "./CarouselContext";

type CarouselPreviousProps = React.ComponentProps<typeof Button>;

export function CarouselPrevious({
  className,
  variant = "outline",
  size = "icon",
  ...props
}: CarouselPreviousProps) {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel();

  return (
    <Button
      variant={variant}
      size={size}
      className={cn(
        "carousel__button",
        orientation === "horizontal"
          ? "carousel__button--previous-horizontal"
          : "carousel__button--previous-vertical",
        className
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <ArrowLeft />
      <span className="sr-only">Previous slide</span>
    </Button>
  );
}
