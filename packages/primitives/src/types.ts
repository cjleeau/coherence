import type { ElementType, ReactNode } from "react";

export type PrimitiveProps<T extends ElementType> = {
  as?: T;
  children?: ReactNode;
  className?: string;
};