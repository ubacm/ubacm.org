// heroStyles.js

export const heroStyles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    marginTop: "-80px",
  },

  contentWrapper: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  leftSide: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
  },

  leftContent: {
    paddingBottom: "96px",
    paddingTop: "80px",
  },

  centerContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  logoContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "24px",
  },

  logo: {
    width: "25%",
    height: "auto",
  },

  titleText: {
    fontWeight: "500",
    fontSize: "32px",
    letterSpacing: "-0.025em",
    textAlign: "center",
    marginBottom: "12px",
    background: "linear-gradient(to right, #a8eeffff, #658ee6ff, #10276cff)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },

  subtitleText: {
    fontSize: "16px",
    fontWeight: "400",
    textAlign: "center",
    color: "#2d3748",
    marginBottom: "24px",
    letterSpacing: "0.025em",
  },

  rightSide: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
  },

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
    width: "40%",
    height: "auto",
  },

  mobileTitleText: {
    fontWeight: "500",
    fontSize: "28px",
    letterSpacing: "-0.025em",
    textAlign: "center",
    marginBottom: "12px",
    background: "linear-gradient(to right, #a8eeffff, #658ee6ff, #10276cff)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    lineHeight: "1.2",
  },

  mobileSubtitleText: {
    fontSize: "14px",
    fontWeight: "400",
    textAlign: "center",
    color: "#2d3748",
    marginBottom: "24px",
    letterSpacing: "0.025em",
    lineHeight: "1.3",
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
