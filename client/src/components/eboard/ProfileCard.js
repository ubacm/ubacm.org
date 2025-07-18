import { Linkedin } from "lucide-react";

const ProfileCard = ({ member, isMobile = false }) => {
  const cardStyle = {
    background:
      "linear-gradient(135deg, #dbeafe 0%, #bfdbfe 50%, #e2e8f0 100%)",
    borderRadius: "0.75rem",
    padding: isMobile ? "0.75rem" : "1rem",
    textAlign: "center",
    boxShadow: "0 2px 4px -1px rgba(0, 0, 0, 0.1)",
    border: "1px solid #e2e8f0",
    transition: "all 0.3s ease",
    cursor: "pointer",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  const imageStyle = {
    width: isMobile ? "70px" : "80px",
    height: isMobile ? "70px" : "80px",
    borderRadius: "50%",
    margin: "0 auto 0.75rem auto",
    objectFit: "cover",
    border: isMobile ? "2px solid #2563eb" : "3px solid #2563eb",
  };

  const nameStyle = {
    fontSize: isMobile ? "0.875rem" : "1rem",
    fontWeight: "bold",
    color: "#374151",
    margin: "0 0 0.25rem 0",
  };

  const roleStyle = {
    fontSize: isMobile ? "0.75rem" : "0.875rem",
    color: "#2563eb",
    margin: "0 0 0.75rem 0",
    fontWeight: "500",
  };

  const linkedinButtonStyle = {
    display: "inline-flex",
    alignItems: "center",
    gap: isMobile ? "0.2rem" : "0.25rem",
    backgroundColor: "#2563eb",
    color: "white",
    padding: isMobile ? "0.25rem 0.5rem" : "0.375rem 0.75rem",
    borderRadius: "0.375rem",
    textDecoration: "none",
    fontSize: isMobile ? "0.7rem" : "0.75rem",
    fontWeight: "500",
    transition: "all 0.2s ease",
    border: "none",
    cursor: "pointer",
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-2px)";
        e.currentTarget.style.boxShadow = "0 8px 15px -3px rgba(0, 0, 0, 0.1)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 2px 4px -1px rgba(0, 0, 0, 0.1)";
      }}
    >
      <div>
        <img src={member.image} alt={member.name} style={imageStyle} />
        <h3 style={nameStyle}>{member.name}</h3>
        <p style={roleStyle}>{member.role}</p>
      </div>

      <a
        href={member.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        style={linkedinButtonStyle}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "#1d4ed8";
          e.currentTarget.style.transform = "scale(1.05)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "#2563eb";
          e.currentTarget.style.transform = "scale(1)";
        }}
      >
        <Linkedin
          style={{
            width: isMobile ? "0.75rem" : "0.875rem",
            height: isMobile ? "0.75rem" : "0.875rem",
          }}
        />
        LinkedIn
      </a>
    </div>
  );
};

export default ProfileCard;
