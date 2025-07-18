const CodaEmbed = ({
  src = "https://coda.io/embed/h-tvOmtTs-/_sucNkdT6?viewMode=embedplay",
  width = "100%",
  height = "550px",
  title = "Coda Document",
}) => {
  const containerStyle = {
    width: "100%",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "1rem",
    backgroundColor: "#f8fafc",
    borderRadius: "0.75rem",
    boxShadow: "0 2px 4px -1px rgba(0, 0, 0, 0.1)",
    border: "1px solid #e2e8f0",
  };

  const iframeStyle = {
    width: width,
    height: height,
    border: "none",
    borderRadius: "0.5rem",
    maxWidth: "100%",
  };

  return (
    <div style={containerStyle}>
      <iframe
        src={src}
        width={width}
        height={height}
        style={iframeStyle}
        title={title}
        allow="fullscreen"
        loading="lazy"
      />
    </div>
  );
};

export default CodaEmbed;
