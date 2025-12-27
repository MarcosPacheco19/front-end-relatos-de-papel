import { useState } from "react";
import { cn } from "../../../lib/utils";
import { Skeleton } from "../Skeleton";

type SidebarMenuSkeletonProps = {
  showIcon?: boolean;
  className?: string;
} & React.ComponentProps<"div">;

export function SidebarMenuSkeleton({
  className,
  showIcon = false,
  ...props
}: SidebarMenuSkeletonProps) {
  const [width] = useState(() => `${Math.floor(Math.random() * 40) + 50}%`);

  return (
    <div
      data-slot="sidebar-menu-skeleton"
      data-sidebar="menu-skeleton"
      className={cn("sidebar__menu-skeleton", className)}
      {...props}
    >
      {showIcon && (
        <Skeleton
          className="sidebar__menu-skeleton-icon"
          data-sidebar="menu-skeleton-icon"
        />
      )}
      <Skeleton
        className="sidebar__menu-skeleton-text"
        data-sidebar="menu-skeleton-text"
        style={
          {
            "--skeleton-width": width,
          } as React.CSSProperties
        }
      />
    </div>
  );
}
