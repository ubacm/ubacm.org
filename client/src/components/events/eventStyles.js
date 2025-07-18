export const eventsStyles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "white",
    backgroundImage:
      "linear-gradient(to right, rgba(128,128,128,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(128,128,128,0.04) 1px, transparent 1px)",
    backgroundSize: "14px 24px",
    width: "100%",
    overflowX: "hidden",
  },
  desktopMain: {
    width: "100%",
    padding: "1.5rem 0",
    display: "flex",
    gap: "4rem",
    minHeight: "100vh",
    maxWidth: "none",
  },

  desktopSidebar: {
    width: "280px",
    flexShrink: 0,
    paddingLeft: "3rem",
  },

  desktopContent: {
    flex: 1,
    paddingRight: "3rem",
  },

  desktopTitle: {
    fontSize: "2rem",
    fontWeight: "bold",
    background: "linear-gradient(to right, #a8eeffff, #658ee6ff, #10276cff)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
    marginBottom: "0.25rem",
    textAlign: "center",
  },

  desktopGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "2rem 2.5rem",
    rowGap: "1.5rem",
    marginTop: "2rem",
  },

  mobileMain: {
    padding: "1.5rem",
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
    minHeight: "100vh",
  },

  mobileSidebar: {
    width: "100%",
    marginBottom: "1rem",
  },

  mobileTitle: {
    fontSize: "1.75rem",
    fontWeight: "bold",
    background: "linear-gradient(to right, #a8eeffff, #658ee6ff, #10276cff)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
    marginBottom: "1rem",
    textAlign: "center",
  },

  mobileYearContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.5rem",
    justifyContent: "center",
    marginBottom: "1rem",
  },

  mobileGrid: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "1rem",
    marginTop: "1rem",
  },

  sidebarTitle: {
    fontSize: "1.125rem",
    fontWeight: "600",
    color: "#374151",
    marginBottom: "1rem",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  },

  yearButton: {
    width: "100%",
    padding: "0.75rem 1rem",
    marginBottom: "0.5rem",
    borderRadius: "0.5rem",
    border: "2px solid #e2e8f0",
    backgroundColor: "#f8fafc",
    color: "#374151",
    fontSize: "0.875rem",
    fontWeight: "500",
    cursor: "pointer",
    transition: "all 0.2s ease",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  },

  mobileYearButton: {
    width: "auto",
    minWidth: "120px",
    padding: "0.5rem 1rem",
    marginBottom: "0",
    borderRadius: "0.5rem",
    border: "2px solid #e2e8f0",
    backgroundColor: "#f8fafc",
    color: "#374151",
    fontSize: "0.75rem",
    fontWeight: "500",
    cursor: "pointer",
    transition: "all 0.2s ease",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  },

  activeYearButton: {
    backgroundColor: "#2563eb",
    borderColor: "#2563eb",
    color: "white",
  },

  selectedYearTitle: {
    fontSize: "1rem",
    fontWeight: "600",
    color: "#2563eb",
    marginBottom: "1rem",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  },

  statsBox: {
    backgroundColor: "#f8fafc",
    border: "1px solid #e2e8f0",
    borderRadius: "0.75rem",
    padding: "1rem",
    marginBottom: "1rem",
  },

  statsText: {
    fontSize: "0.875rem",
    color: "#64748b",
    margin: 0,
  },

  statsNumber: {
    fontSize: "1.125rem",
    fontWeight: "bold",
    color: "#2563eb",
    margin: "0.25rem 0 0 0",
  },

  applyButton: {
    width: "100%",
    padding: "0.875rem 1rem",
    backgroundColor: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "0.75rem",
    fontSize: "0.875rem",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.2s ease",
    textAlign: "center",
    marginTop: "1rem",
    boxShadow: "0 2px 4px -1px rgba(0, 0, 0, 0.1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
  },
};

export const mediaStyles = `
  @media (max-width: 767px) {
    .desktop-events {
      display: none !important;
    }
    .mobile-events {
      display: flex !important;
    }
  }
  @media (min-width: 768px) {
    .desktop-events {
      display: flex !important;
    }
    .mobile-events {
      display: none !important;
    }
  }
`;

export const eventCardStyles = {
  card: {
    background:
      "linear-gradient(135deg, #dbeafe 0%, #bfdbfe 50%, #e2e8f0 100%)",
    borderRadius: "0.75rem",
    boxShadow: "0 2px 4px -1px rgba(0, 0, 0, 0.1)",
    border: "1px solid #e2e8f0",
    transition: "all 0.3s ease",
    cursor: "pointer",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },

  cardMobile: {
    padding: "1rem",
  },

  cardDesktop: {
    padding: "1.25rem",
  },

  poster: {
    width: "100%",
    borderRadius: "0.5rem",
    objectFit: "cover",
    border: "2px solid #2563eb",
  },

  posterMobile: {
    height: "180px",
  },

  posterDesktop: {
    height: "220px",
  },

  name: {
    fontWeight: "bold",
    color: "#374151",
    margin: "0",
  },

  nameMobile: {
    fontSize: "1rem",
  },

  nameDesktop: {
    fontSize: "1.25rem",
  },

  detailRow: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    color: "#2563eb",
    fontWeight: "500",
  },

  detailRowMobile: {
    fontSize: "0.8rem",
  },

  detailRowDesktop: {
    fontSize: "0.875rem",
  },

  description: {
    color: "#6b7280",
    lineHeight: "1.5",
    margin: "0",
  },

  descriptionMobile: {
    fontSize: "0.8rem",
  },

  descriptionDesktop: {
    fontSize: "0.875rem",
  },

  content: {
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem",
  },
  cardHover: {
    transform: "translateY(-2px)",
    boxShadow: "0 8px 15px -3px rgba(0, 0, 0, 0.1)",
  },

  cardHoverReset: {
    transform: "translateY(0)",
    boxShadow: "0 2px 4px -1px rgba(0, 0, 0, 0.1)",
  },
};
