import type { ElementType } from "react";
import { cx } from "../utils/cx";
import type { PolymorphicProps, SpacingToken } from "../types";

type StackProps<T extends ElementType> = PolymorphicProps<T> & {
  space?: SpacingToken;
};

const spaceClasses: Record<SpacingToken, string> = {
  "0": "space-y-0",
  "1": "space-y-1",
  "2": "space-y-2",
  "3": "space-y-3",
  "4": "space-y-4",
  "5": "space-y-5",
  "6": "space-y-6",
  "8": "space-y-8",
  "10": "space-y-10",
  "12": "space-y-12",
  "16": "space-y-16",
  "20": "space-y-20",
  "24": "space-y-24"
};

export function Stack<T extends ElementType = "div">({
  as,
  children,
  className,
  space = "4",
  ...rest
}: StackProps<T>) {
  const Component = (as || "div") as ElementType;

  return (
    <Component
      className={cx("flex flex-col", spaceClasses[space], className)}
      {...rest}
    >
      {children}
    </Component>
  );
}