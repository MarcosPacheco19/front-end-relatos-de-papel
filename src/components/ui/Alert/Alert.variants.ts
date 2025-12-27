import { cva } from "class-variance-authority";

export const alertVariants = cva("alert", {
  variants: {
    variant: {
      default: "alert--default",
      destructive: "alert--destructive",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});
