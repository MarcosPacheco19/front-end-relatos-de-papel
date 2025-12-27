import { createContext } from "react";
import { type ChartContextProps } from "./chart.types";

export const ChartContext = createContext<ChartContextProps | null>(null);
