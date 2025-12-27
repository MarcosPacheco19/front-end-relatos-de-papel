import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cn } from "../../../lib/utils";
import { buttonVariants } from "../Button";
import "./Calendar.css";

type CalendarProps = React.ComponentProps<typeof DayPicker>;

export function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("calendar", className)}
      classNames={{
        months: "calendar__months",
        month: "calendar__month",
        caption: "calendar__caption",
        caption_label: "calendar__caption-label",
        nav: "calendar__nav",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "calendar__nav-button"
        ),
        nav_button_previous: "calendar__nav-button--previous",
        nav_button_next: "calendar__nav-button--next",
        table: "calendar__table",
        head_row: "calendar__head-row",
        head_cell: "calendar__head-cell",
        row: "calendar__row",
        cell: cn(
          "calendar__cell",
          props.mode === "range"
            ? "calendar__cell--range"
            : "calendar__cell--single"
        ),
        day: cn(buttonVariants({ variant: "ghost" }), "calendar__day"),
        day_range_start: "calendar__day--range-start",
        day_range_end: "calendar__day--range-end",
        day_selected: "calendar__day--selected",
        day_today: "calendar__day--today",
        day_outside: "calendar__day--outside",
        day_disabled: "calendar__day--disabled",
        day_range_middle: "calendar__day--range-middle",
        day_hidden: "calendar__day--hidden",
        ...classNames,
      }}
      components={{
        Chevron: ({ orientation, ...props }) => {
          const Icon = orientation === "left" ? ChevronLeft : ChevronRight;
          return <Icon className="size-4" {...props} />;
        },
      }}
      {...props}
    />
  );
}
