export const heroStyles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "calc(100vh - 80px)",
    marginTop: "-60px",
  },

  contentWrapper: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "80px",
    padding: "0 40px",
  },

  leftSide: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    maxWidth: "450px",
  },

  leftContent: {
    paddingBottom: "0px",
    paddingTop: "0px",
  },

  centerContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },

  logoContainer: {
    display: "flex",
    justifyContent: "flex-start",
    marginBottom: "20px",
  },

  logo: {
    width: "100px",
    height: "auto",
  },

  titleText: {
    fontWeight: "700",
    fontSize: "51px",
    letterSpacing: "-0.025em",
    textAlign: "left",
    marginBottom: "16px",
    color: "#1a202c",
    lineHeight: "1.1",
    maxWidth: "400px",
  },

  subtitleText: {
    fontSize: "17px",
    fontWeight: "400",
    textAlign: "left",
    color: "#4a5568",
    marginBottom: "14px",
    letterSpacing: "0.025em",
    maxWidth: "400px",
  },

  descriptionText: {
    fontSize: "15px",
    fontWeight: "400",
    textAlign: "left",
    color: "#718096",
    marginBottom: "28px",
    lineHeight: "1.6",
    maxWidth: "400px",
  },

  buttonContainer: {
    display: "flex",
    gap: "12px",
    alignItems: "center",
  },

  primaryButton: {
    padding: "14px 42px",
    fontSize: "17px",
    fontWeight: "600",
    color: "white",
    background: "#025cc2",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    transition: "all 0.2s ease",
  },

  secondaryButton: {
    padding: "10px 20px",
    fontSize: "15px",
    fontWeight: "500",
    color: "#3b82f6",
    background: "transparent",
    border: "1px solid #e2e8f0",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "all 0.2s ease",
  },

  rightSide: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    paddingLeft: "100px",
  },

  // Mobile styles
  mobileContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    paddingTop: "8px",
    paddingLeft: "16px",
    paddingRight: "16px",
  },

  mobileLeftSide: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginBottom: "48px",
  },

  mobileLeftContent: {
    paddingBottom: "24px",
    paddingTop: "24px",
  },

  mobileLogo: {
    width: "120px",
    height: "auto",
  },

  mobileTitleText: {
    fontWeight: "700",
    fontSize: "34px",
    letterSpacing: "-0.025em",
    textAlign: "left",
    marginBottom: "12px",
    color: "#1a202c",
    lineHeight: "1.2",
  },

  mobileSubtitleText: {
    fontSize: "16px",
    fontWeight: "400",
    textAlign: "left",
    color: "#4a5568",
    marginBottom: "12px",
    letterSpacing: "0.025em",
    lineHeight: "1.3",
  },

  mobileDescriptionText: {
    fontSize: "14px",
    fontWeight: "400",
    textAlign: "left",
    color: "#718096",
    marginBottom: "24px",
    lineHeight: "1.6",
  },

  mobileButtonContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    width: "100%",
  },

  mobilePrimaryButton: {
    padding: "12px 24px",
    fontSize: "16px",
    fontWeight: "500",
    color: "white",
    background: "#3b82f6",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    width: "100%",
  },

  mobileSecondaryButton: {
    padding: "12px 24px",
    fontSize: "16px",
    fontWeight: "500",
    color: "#3b82f6",
    background: "transparent",
    border: "1px solid #e2e8f0",
    borderRadius: "8px",
    cursor: "pointer",
    width: "100%",
  },

  mobileRightSide: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
};

export const mediaStyles = `
  @media (max-width: 1023px) {
    .desktop-hero {
      display: none !important;
    }
    .mobile-hero {
      display: flex !important;
    }
  }
  @media (min-width: 1024px) {
    .desktop-hero {
      display: flex !important;
    }
    .mobile-hero {
      display: none !important;
    }
  }
`;