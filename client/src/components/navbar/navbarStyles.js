export const navbarStyles = {
  nav: {
    marginTop: "16px",
    marginBottom: "48px",
    width: "100%",
    position: "relative",
  },
  desktopContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: "8px",
    paddingBottom: "8px",
    paddingLeft: "16px",
    paddingRight: "16px",
    gap: "16px",
  },
  socialContainer: {
    display: "flex",
    flexShrink: 0,
    fontSize: "24px",
    gap: "16px",
    alignItems: "center",
    color: "#166cecff",
  },
  navLinksContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "32px",
  },
  navLink: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "18px",
    textDecoration: "none",
    color: "#166cecff",
    position: "relative",
    overflow: "hidden",
    padding: "4px 8px",
  },
  underline: {
    position: "absolute",
    bottom: 0,
    left: 0,
    height: "2px",
    backgroundColor: "#60a5fa",
  },
  emailContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "24px",
    color: "#166cecff",
  },
  mobileHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: "8px",
    paddingBottom: "8px",
    paddingLeft: "16px",
    paddingRight: "16px",
  },
  mobileSocialContainer: {
    display: "flex",
    gap: "16px",
    fontSize: "20px",
    color: "#166cecff",
  },
  menuButton: {
    fontSize: "24px",
    color: "#166cecff",
    background: "none",
    border: "none",
    cursor: "pointer",
  },
  mobileMenu: {
    overflow: "hidden",
    backgroundColor: "white",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
    borderTop: "1px solid #e5e5e5",
  },
  mobileMenuContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "16px",
    paddingBottom: "16px",
    gap: "16px",
  },
  mobileNavLink: {
    fontSize: "18px",
    paddingTop: "8px",
    paddingBottom: "8px",
    paddingLeft: "16px",
    paddingRight: "16px",
    width: "100%",
    textAlign: "center",
    textDecoration: "none",
    color: "#166cecff",
  },
  mobileEmailLink: {
    fontSize: "24px",
    paddingTop: "8px",
    paddingBottom: "8px",
    textDecoration: "none",
    color: "#166cecff",
  },
};

export const mediaStyles = `
  @media (max-width: 1023px) {
    .desktop-nav {
      display: none !important;
    }
    .mobile-nav {
      display: block !important;
    }
  }
  @media (min-width: 1024px) {
    .desktop-nav {
      display: flex !important;
    }
    .mobile-nav {
      display: none !important;
    }
  }
`;