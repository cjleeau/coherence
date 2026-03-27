import type { ElementType, ComponentPropsWithoutRef } from "react";
import { cx } from "../utils/cx";
import type { PrimitiveProps } from "../types";

type BoxProps<T extends ElementType> = PrimitiveProps<T> & {
  as?: T;
};

export function Box<T extends ElementType = "div">({
  as,
  children,
  className,
  ...rest
}: BoxProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof BoxProps<T>>) {
  const Component = as || "div";

  return (
    <Component className={cx(className)} {...rest}>
      {children}
    </Component>
  );
}