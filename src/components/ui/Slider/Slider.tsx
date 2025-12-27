import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "../../../lib/utils";
import "./Slider.css";

type SliderProps = React.ComponentProps<typeof SliderPrimitive.Root>;

export function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  ...props
}: SliderProps) {
  const _values = Array.isArray(value)
    ? value
    : Array.isArray(defaultValue)
    ? defaultValue
    : [min, max];

  return (
    <SliderPrimitive.Root
      data-slot="slider"
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      className={cn("slider", className)}
      {...props}
    >
      <SliderPrimitive.Track data-slot="slider-track" className="slider__track">
        <SliderPrimitive.Range
          data-slot="slider-range"
          className="slider__range"
        />
      </SliderPrimitive.Track>
      {Array.from({ length: _values.length }, (_, index) => (
        <SliderPrimitive.Thumb
          data-slot="slider-thumb"
          key={index}
          className="slider__thumb"
        />
      ))}
    </SliderPrimitive.Root>
  );
}
