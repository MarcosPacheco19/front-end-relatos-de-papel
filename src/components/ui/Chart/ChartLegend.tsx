import * as RechartsPrimitive from "recharts";

import { cn } from "../../../lib/utils";
import { useChart } from "./chart.hooks";
import { getPayloadConfigFromPayload } from "./chart.utils";

type LegendPayloadItem = {
  value?: string;
  dataKey?: string;
  color?: string;
};

type ChartLegendContentProps = React.ComponentProps<"div"> & {
  payload?: LegendPayloadItem[];
  verticalAlign?: "top" | "middle" | "bottom";
  hideIcon?: boolean;
  nameKey?: string;
};

export const ChartLegend = RechartsPrimitive.Legend;

export function ChartLegendContent({
  className,
  hideIcon = false,
  payload,
  verticalAlign = "bottom",
  nameKey,
}: ChartLegendContentProps) {
  const { config } = useChart();

  if (!payload?.length) {
    return null;
  }

  return (
    <div
      className={cn(
        "chart__legend",
        verticalAlign === "top"
          ? "chart__legend--top"
          : "chart__legend--bottom",
        className
      )}
    >
      {payload.map((item: LegendPayloadItem) => {
        const key = `${nameKey || item.dataKey || "value"}`;
        const itemConfig = getPayloadConfigFromPayload(config, item, key);

        return (
          <div key={item.value} className="chart__legend-item">
            {itemConfig?.icon && !hideIcon ? (
              <itemConfig.icon />
            ) : (
              <div
                className="chart__legend-indicator"
                style={{
                  backgroundColor: item.color,
                }}
              />
            )}
            {itemConfig?.label}
          </div>
        );
      })}
    </div>
  );
}
