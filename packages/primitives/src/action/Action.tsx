import type { CSSProperties, ElementType } from "react";
import { cx } from "../utils/cx";
import { Box } from "../box/Box";
import type {
  ActionVariantToken,
  PolymorphicProps,
  PrimitiveElement
} from "../types";

export type ActionProps<T extends PrimitiveElement = "button"> =
  PolymorphicProps<T> & {
    variant?: ActionVariantToken;
  };

const variantStyles: Record<ActionVariantToken, CSSProperties> = {
  primary: {
    backgroundColor: "var(--action-primary)",
    color: "var(--action-primaryText)",
    borderColor: "var(--border-strong)"
  },
  secondary: {
    backgroundColor: "var(--surface-sunken)",
    color: "var(--text-primary)",
    borderColor: "var(--border-strong)"
  }
};

export function Action<T extends ElementType = "button">({
  as,
  children,
  className,
  variant = "primary",
  style,
  ...rest
}: ActionProps<T>) {
  const Component = (as || "button") as ElementType;

  return (
    <Box
      as={Component}
      className={cx(
        "inline-flex items-center justify-center rounded-lg border px-4 py-2 text-sm transition",
        className
      )}
      style={
        {
          ...variantStyles[variant],
          cursor: "pointer",
          ...((style as CSSProperties | undefined) ?? {})
        } as CSSProperties
      }
      {...rest}
    >
      {children}
    </Box>
  );
}