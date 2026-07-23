import * as React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "default" | "narrow" | "wide";
}

export function Container({ className, size = "default", ...props }: ContainerProps) {
  const sizes = {
    default: "max-w-7xl",
    narrow: "max-w-4xl",
    wide: "max-w-[1600px]",
  };

  return (
    <div
      className={cn("mx-auto w-full px-6 md:px-12 lg:px-24", sizes[size], className)}
      {...props}
    />
  );
}
