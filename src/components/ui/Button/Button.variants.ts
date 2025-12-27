import { cva } from "class-variance-authority";

export const buttonVariants = cva("button", {
  variants: {
    variant: {
      default: "button--default",
      destructive: "button--destructive",
      outline: "button--outline",
      secondary: "button--secondary",
      ghost: "button--ghost",
      link: "button--link",
    },
    size: {
      default: "button--size-default",
      sm: "button--size-sm",
      lg: "button--size-lg",
      icon: "button--size-icon",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});
