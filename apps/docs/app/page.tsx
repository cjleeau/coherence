export default function Page() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "var(--surface-base)",
        color: "var(--text-primary)",
        padding: "var(--spacing-8)"
      }}
    >
      <div
        style={{
          background: "var(--surface-raised)",
          padding: "var(--spacing-6)",
          borderRadius: "12px",
          border: "1px solid var(--border-subtle)"
        }}
      >
        <h1
          style={{
            fontSize: "var(--font-size-3xl)",
            marginBottom: "var(--spacing-4)"
          }}
        >
          Coherence Token System
        </h1>

        <p style={{ color: "var(--text-secondary)" }}>
          If you can read this with proper spacing, colours and typography —
          tokens are wired correctly.
        </p>

        <div
          style={{
            marginTop: "var(--spacing-6)",
            padding: "var(--spacing-4)",
            background: "var(--action-primary)",
            color: "var(--action-primaryText)",
            borderRadius: "8px"
          }}
        >
          Primary action surface
        </div>
      </div>
    </main>
  );
}