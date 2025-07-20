import { Mail, MapPin, Calendar, Code } from "lucide-react";
import { FaDiscord, FaInstagram, FaGithub } from "react-icons/fa";
import { footerStyles } from "./footerStyles";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    {
      icon: FaDiscord,
      href: "https://discord.gg/ZQzsrpqtJW",
      label: "Discord",
    },
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/ubacm/",
      label: "Instagram",
    },
    ,
    {
      href: "https://github.com/ubacm",
      icon: FaGithub,
      label: "Github",
    }
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Eboard", href: "/eboard" },
    { name: "Events", href: "/events" },
    { name: "Resources", href: "/resources" },
  ];

  return (
    <footer style={footerStyles.footer}>
      <div style={footerStyles.pattern}></div>

      <div style={footerStyles.container}>
        <div style={footerStyles.grid}>
          <div style={{ gridColumn: "span 2" }}>
            <div style={footerStyles.logoContainer}>
              <div style={footerStyles.logo}>
                <Code
                  style={{ width: "2rem", height: "2rem", color: "white" }}
                />
              </div>
              <div>
                <h3 style={footerStyles.title}>ACM @ UB</h3>
                <p style={footerStyles.subtitle}>
                  Association for Computing Machinery
                </p>
              </div>
            </div>

            <p style={footerStyles.description}>
              Empowering the next generation of computer scientists through
              workshops, networking events, and hands-on projects. Our mission
              is to engage with student peers and help them find their path in
              the industry!
            </p>

            <div>
              <div style={footerStyles.contactItem}>
                <MapPin style={footerStyles.icon} />
                <span>Davis 101, University at Buffalo, NY</span>
              </div>
              <div style={footerStyles.contactItem}>
                <Mail style={footerStyles.icon} />
                <span>ubacm@gmail.com</span>
              </div>
              <div style={footerStyles.contactItem}>
                <Calendar style={footerStyles.icon} />
                <span>Events on Thursdays 6:00 PM</span>
              </div>
            </div>
          </div>

          <div>
            <h4 style={footerStyles.sectionTitle}>Quick Links</h4>
            <div>
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  style={footerStyles.link}
                  onMouseEnter={(e) => (e.target.style.color = "#2563eb")}
                  onMouseLeave={(e) => (e.target.style.color = "#4b5563")}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div style={footerStyles.divider}>
          <div style={footerStyles.bottomRow}>
            <div style={footerStyles.copyright}>
              <p>
                © {currentYear} ACM at University at Buffalo. All rights
                reserved.
              </p>
              <p style={{ marginTop: "0.25rem" }}>
                Computer Science for students by students.
              </p>
            </div>
            <div style={footerStyles.socialContainer}>
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    style={footerStyles.socialButton}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#2563eb";
                      e.currentTarget.style.borderColor = "#2563eb";
                      e.currentTarget.style.transform = "scale(1.1)";
                      const icon = e.currentTarget.querySelector("svg");
                      if (icon) icon.style.color = "white";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "#eff6ff";
                      e.currentTarget.style.borderColor = "#bfdbfe";
                      e.currentTarget.style.transform = "scale(1)";
                      const icon = e.currentTarget.querySelector("svg");
                      if (icon) icon.style.color = "#4b5563";
                    }}
                  >
                    <Icon
                      style={{
                        width: "1.25rem",
                        height: "1.25rem",
                        color: "#4b5563",
                      }}
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div style={footerStyles.accentBar}></div>
      </div>
    </footer>
  );
};

export default Footer;
