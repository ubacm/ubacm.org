import { FaDiscord, FaInstagram, FaBars, FaTimes, FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { navbarStyles, mediaStyles } from "./navbarStyles";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/eboard", label: "E-board" },
    { href: "/events", label: "Events" },
    { href: "/resources", label: "Resources" },
  ];

  const socialLinks = [
    { href: "https://discord.gg/ZQzsrpqtJW", icon: FaDiscord },
    {
      href: "https://www.instagram.com/ubacm/",
      icon: FaInstagram,
    },
    {
      href: "https://github.com/ubacm",
      icon: FaGithub
    }
  ];

  return (
    <>
      <style>{mediaStyles}</style>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={navbarStyles.nav}
      >
        {/* Desktop Navigation */}
        <div className="desktop-nav" style={navbarStyles.desktopContainer}>
          {/* Left Social Icons */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={navbarStyles.socialContainer}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                whileHover={{ scale: 1.2, color: "#60a5fa" }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <link.icon />
              </motion.a>
            ))}
          </motion.div>

          {/* Center Navigation Links */}
          <div style={navbarStyles.navLinksContainer}>
            {navItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <motion.a
                  href={item.href}
                  style={navbarStyles.navLink}
                  whileHover={{ scale: 1.05, color: "#60a5fa" }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.label}
                  <motion.div
                    style={navbarStyles.underline}
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              </motion.div>
            ))}
          </div>

          {/* Right Email Icon */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={navbarStyles.emailContainer}
          >
            <motion.a
              href="mailto:ubacm@gmail.com"
              whileHover={{ scale: 1.2, color: "#60a5fa" }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <MdOutlineEmail />
            </motion.a>
          </motion.div>
        </div>

        {/* Mobile Navigation */}
        <div className="mobile-nav">
          {/* Mobile Header */}
          <div style={navbarStyles.mobileHeader}>
            {/* Mobile Social Icons */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              style={navbarStyles.mobileSocialContainer}
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  whileHover={{ scale: 1.2, color: "#60a5fa" }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <link.icon />
                </motion.a>
              ))}
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              onClick={toggleMenu}
              style={navbarStyles.menuButton}
              whileHover={{ scale: 1.1, color: "#60a5fa" }}
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </motion.button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                style={navbarStyles.mobileMenu}
              >
                <div style={navbarStyles.mobileMenuContainer}>
                  {navItems.map((item, index) => (
                    <motion.a
                      key={index}
                      href={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 * index }}
                      style={navbarStyles.mobileNavLink}
                      whileHover={{ scale: 1.05, color: "#60a5fa" }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </motion.a>
                  ))}

                  {/* Mobile Email Link */}
                  <motion.a
                    href="mailto:ubacm@gmail.com"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                    style={navbarStyles.mobileEmailLink}
                    whileHover={{ scale: 1.2, color: "#60a5fa" }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsOpen(false)}
                  >
                    <MdOutlineEmail />
                  </motion.a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
