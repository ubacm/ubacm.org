export const footerStyles = {
  footer: {
    position: "relative",
    background:
      "linear-gradient(135deg, #dbeafe 0%, #bfdbfe 50%, #e2e8f0 100%)",
    color: "#374151",
    fontFamily: "inherit",
  },

  pattern: {
    position: "absolute",
    inset: "0",
    backgroundImage:
      "linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.03) 1px, transparent 1px)",
    backgroundSize: "24px 24px",
  },

  container: {
    position: "relative",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "2.5rem 2rem",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "2rem",
    marginBottom: "2rem",
  },

  logoContainer: {
    display: "flex",
    alignItems: "center",
    marginBottom: "1rem",
  },

  logo: {
    backgroundColor: "#2563eb",
    padding: "0.75rem",
    borderRadius: "0.75rem",
    marginRight: "1rem",
    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
  },

  title: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#111827",
    margin: "0",
  },

  subtitle: {
    color: "#2563eb",
    margin: "0",
  },

  description: {
    color: "#4b5563",
    marginBottom: "1rem",
    lineHeight: "1.6",
  },

  contactItem: {
    display: "flex",
    alignItems: "center",
    color: "#4b5563",
    marginBottom: "0.75rem",
  },

  icon: {
    width: "1.25rem",
    height: "1.25rem",
    marginRight: "0.75rem",
    color: "#2563eb",
  },

  sectionTitle: {
    fontSize: "1.125rem",
    fontWeight: "600",
    color: "#111827",
    marginBottom: "1rem",
  },

  link: {
    color: "#4b5563",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    marginBottom: "0.75rem",
    transition: "color 0.2s ease",
    cursor: "pointer",
  },

  divider: {
    borderTop: "1px solid #9ca3af",
    paddingTop: "1.5rem",
  },

  bottomRow: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1.5rem",
  },

  copyright: {
    color: "#4b5563",
    fontSize: "0.875rem",
    textAlign: "center",
  },

  socialContainer: {
    display: "flex",
    gap: "1rem",
  },

  socialButton: {
    backgroundColor: "#eff6ff",
    border: "1px solid #bfdbfe",
    padding: "0.75rem",
    borderRadius: "0.75rem",
    transition: "all 0.3s ease",
    cursor: "pointer",
  },

  accentBar: {
    position: "absolute",
    bottom: "0",
    left: "0",
    right: "0",
    height: "4px",
    background: "linear-gradient(to right, #2563eb, #0ea5e9, #2563eb)",
  },
};
