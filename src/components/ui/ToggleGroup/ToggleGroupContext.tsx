import { createContext } from "react";
import type { ToggleVariants } from "../Toggle/toggle.variants";

export const ToggleGroupContext = createContext<ToggleVariants>({
  size: "default",
  variant: "default",
});
