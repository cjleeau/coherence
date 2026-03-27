import type { ComponentPropsWithoutRef, ElementType } from "react";
import { cx } from "../utils/cx";
import type { PrimitiveProps } from "../types";

type InlineSpace = "1" | "2" | "3" | "4" | "5" | "6" | "8";
type InlineAlign = "start" | "center" | "end" | "stretch" | "baseline";

type InlineProps<T extends ElementType> = PrimitiveProps<T> & {
  as?: T;
  space?: InlineSpace;
  align?: InlineAlign;
  wrap?: boolean;
};

const spaceClasses: Record<InlineSpace, string> = {
  "1": "gap-1",
  "2": "gap-2",
  "3": "gap-3",
  "4": "gap-4",
  "5": "gap-5",
  "6": "gap-6",
  "8": "gap-8"
};

const alignClasses: Record<InlineAlign, string> = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch",
  baseline: "items-baseline"
};

export function Inline<T extends ElementType = "div">({
  as,
  children,
  className,
  space = "3",
  align = "center",
  wrap = false,
  ...rest
}: InlineProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof InlineProps<T>>) {
  const Component = as || "div";

  return (
    <Component
      className={cx(
        "flex",
        spaceClasses[space],
        alignClasses[align],
        wrap && "flex-wrap",
        className
      )}
      {...rest}
    >
      {children}
    </Component>
  );
}