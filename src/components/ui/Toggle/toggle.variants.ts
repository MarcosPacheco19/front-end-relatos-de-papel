import { cva, type VariantProps } from "class-variance-authority";

export const toggleVariants = cva("toggle", {
  variants: {
    variant: {
      default: "toggle--default",
      outline: "toggle--outline",
    },
    size: {
      default: "toggle--default-size",
      sm: "toggle--sm",
      lg: "toggle--lg",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export type ToggleVariants = VariantProps<typeof toggleVariants>;
