import { ArrowRight } from "lucide-react";

import { cn } from "../../../lib/utils";
import { Button } from "../Button/Button";
import { useCarousel } from "./CarouselContext";

type CarouselNextProps = React.ComponentProps<typeof Button>;

export function CarouselNext({
  className,
  variant = "outline",
  size = "icon",
  ...props
}: CarouselNextProps) {
  const { orientation, scrollNext, canScrollNext } = useCarousel();

  return (
    <Button
      variant={variant}
      size={size}
      className={cn(
        "carousel__button",
        orientation === "horizontal"
          ? "carousel__button--next-horizontal"
          : "carousel__button--next-vertical",
        className
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <ArrowRight />
      <span className="sr-only">Next slide</span>
    </Button>
  );
}
