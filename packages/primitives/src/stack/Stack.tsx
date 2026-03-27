import type { ComponentPropsWithoutRef, ElementType } from "react";
import { cx } from "../utils/cx";
import type { PrimitiveProps } from "../types";

type StackSpace = "1" | "2" | "3" | "4" | "5" | "6" | "8" | "10" | "12";

type StackProps<T extends ElementType> = PrimitiveProps<T> & {
  as?: T;
  space?: StackSpace;
};

const spaceClasses: Record<StackSpace, string> = {
  "1": "space-y-1",
  "2": "space-y-2",
  "3": "space-y-3",
  "4": "space-y-4",
  "5": "space-y-5",
  "6": "space-y-6",
  "8": "space-y-8",
  "10": "space-y-10",
  "12": "space-y-12"
};

export function Stack<T extends ElementType = "div">({
  as,
  children,
  className,
  space = "4",
  ...rest
}: StackProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof StackProps<T>>) {
  const Component = as || "div";

  return (
    <Component className={cx("flex flex-col", spaceClasses[space], className)} {...rest}>
      {children}
    </Component>
  );
}