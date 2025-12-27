import { useMemo } from "react";
import * as RechartsPrimitive from "recharts";

import { cn } from "../../../lib/utils";
import { useChart } from "./chart.hooks";
import { getPayloadConfigFromPayload } from "./chart.utils";

type PayloadItem = {
  dataKey?: string;
  name?: string;
  value?: unknown;
  payload?: Record<string, unknown>;
  color?: string;
  fill?: string;
};

type ChartTooltipContentProps = React.ComponentProps<"div"> & {
  active?: boolean;
  payload?: PayloadItem[];
  label?: string;
  hideLabel?: boolean;
  hideIndicator?: boolean;
  indicator?: "line" | "dot" | "dashed";
  nameKey?: string;
  labelKey?: string;
  labelFormatter?: (value: unknown, payload: PayloadItem[]) => React.ReactNode;
  labelClassName?: string;
  formatter?: (
    value: unknown,
    name: string,
    item: PayloadItem,
    index: number,
    payload: Record<string, unknown>
  ) => React.ReactNode;
  color?: string;
  className?: string;
};

export const ChartTooltip = RechartsPrimitive.Tooltip;

export function ChartTooltipContent({
  active,
  payload,
  className,
  indicator = "dot",
  hideLabel = false,
  hideIndicator = false,
  label,
  labelFormatter,
  labelClassName,
  formatter,
  color,
  nameKey,
  labelKey,
}: ChartTooltipContentProps) {
  const { config } = useChart();

  const tooltipLabel = useMemo(() => {
    if (hideLabel || !payload?.length) {
      return null;
    }

    const [item] = payload;
    const key = `${labelKey || item?.dataKey || item?.name || "value"}`;
    const itemConfig = getPayloadConfigFromPayload(config, item, key);
    const value =
      !labelKey && typeof label === "string"
        ? config[label as keyof typeof config]?.label || label
        : itemConfig?.label;

    if (labelFormatter) {
      return (
        <div className={cn("chart__tooltip-label", labelClassName)}>
          {labelFormatter(value, payload)}
        </div>
      );
    }

    if (!value) {
      return null;
    }

    return (
      <div className={cn("chart__tooltip-label", labelClassName)}>{value}</div>
    );
  }, [
    label,
    labelFormatter,
    payload,
    hideLabel,
    labelClassName,
    config,
    labelKey,
  ]);

  if (!active || !payload?.length) {
    return null;
  }

  const nestLabel = payload.length === 1 && indicator !== "dot";

  return (
    <div className={cn("chart__tooltip", className)}>
      {!nestLabel ? tooltipLabel : null}
      <div className="grid gap-1.5">
        {payload.map((item: PayloadItem, index: number) => {
          const key = `${nameKey || item.name || item.dataKey || "value"}`;
          const itemConfig = getPayloadConfigFromPayload(config, item, key);
          const indicatorColor =
            color || (item.payload?.fill as string) || item.color;

          return (
            <div
              key={item.dataKey}
              className={cn(
                "chart__tooltip-item",
                indicator === "dot" && "chart__tooltip-item--dot"
              )}
            >
              {formatter && item?.value !== undefined && item.name ? (
                formatter(
                  item.value,
                  item.name,
                  item,
                  index,
                  item.payload ?? {}
                )
              ) : (
                <>
                  {itemConfig?.icon ? (
                    <itemConfig.icon />
                  ) : (
                    !hideIndicator && (
                      <div
                        className={cn("chart__tooltip-indicator", {
                          "chart__tooltip-indicator--dot": indicator === "dot",
                          "chart__tooltip-indicator--line":
                            indicator === "line",
                          "chart__tooltip-indicator--dashed":
                            indicator === "dashed",
                          "my-0.5": nestLabel && indicator === "dashed",
                        })}
                        style={
                          {
                            "--color-bg": indicatorColor,
                            "--color-border": indicatorColor,
                            backgroundColor: indicatorColor,
                            borderColor: indicatorColor,
                          } as React.CSSProperties
                        }
                      />
                    )
                  )}
                  <div
                    className={cn(
                      "chart__tooltip-value",
                      nestLabel
                        ? "chart__tooltip-value--nest"
                        : "chart__tooltip-value--inline"
                    )}
                  >
                    <div className="grid gap-1.5">
                      {nestLabel ? tooltipLabel : null}
                      <span className="text-muted-foreground">
                        {itemConfig?.label || item.name}
                      </span>
                    </div>
                    {item.value !== undefined && item.value !== null && (
                      <span className="text-foreground font-mono font-medium tabular-nums">
                        {String(item.value)}
                      </span>
                    )}
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
