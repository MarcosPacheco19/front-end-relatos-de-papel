import { cva } from "class-variance-authority";

export const badgeVariants = cva("badge", {
  variants: {
    variant: {
      default: "badge--default",
      secondary: "badge--secondary",
      destructive: "badge--destructive",
      outline: "badge--outline",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});
