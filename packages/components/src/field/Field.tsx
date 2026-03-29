import { useId } from "react";
import type { CSSProperties, InputHTMLAttributes } from "react";

export type FieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  hint?: string;
  error?: string;
};

export function Field({
  label,
  hint,
  error,
  id,
  disabled = false,
  style,
  ...rest
}: FieldProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const hintId = hint ? `${inputId}-hint` : undefined;
  const errorId = error ? `${inputId}-error` : undefined;
  const describedBy = [hintId, errorId].filter(Boolean).join(" ") || undefined;

  const labelStyle: CSSProperties = {
    color: "var(--text-primary)",
    fontSize: "var(--font-size-sm)",
    fontWeight: "var(--font-weight-medium)",
    lineHeight: "var(--font-lineHeight-normal)"
  };

  const hintStyle: CSSProperties = {
    color: "var(--text-secondary)",
    fontSize: "var(--font-size-sm)",
    lineHeight: "var(--font-lineHeight-normal)"
  };

  const errorStyle: CSSProperties = {
    color: "var(--status-critical)",
    fontSize: "var(--font-size-sm)",
    lineHeight: "var(--font-lineHeight-normal)"
  };

  const inputStyle: CSSProperties = {
    width: "100%",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: error ? "var(--status-critical)" : "var(--border-subtle)",
    backgroundColor: "var(--surface-base)",
    color: "var(--text-primary)",
    borderRadius: "0.5rem",
    padding: "0.75rem 0.875rem",
    fontSize: "var(--font-size-md)",
    lineHeight: "var(--font-lineHeight-normal)",
    outline: "none",
    opacity: disabled ? 0.5 : 1,
    ...((style as CSSProperties | undefined) ?? {})
  };

  return (
    <div className="flex w-full flex-col gap-2">
      <label htmlFor={inputId} style={labelStyle}>
        {label}
      </label>

      <input
        id={inputId}
        disabled={disabled}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy}
        className="w-full"
        style={inputStyle}
        {...rest}
      />

      {hint ? (
        <p id={hintId} style={hintStyle}>
          {hint}
        </p>
      ) : null}

      {error ? (
        <p id={errorId} style={errorStyle}>
          {error}
        </p>
      ) : null}
    </div>
  );
}