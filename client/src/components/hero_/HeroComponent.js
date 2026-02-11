import { useState } from "react";
import acm8 from "../../assets/acmlogo.png";
import acm1 from "../../assets/hero/acm 1.jpg";
import acm2 from "../../assets/hero/acm 2.jpeg";
import acm3 from "../../assets/hero/acm 3.jpg";
import acm6 from "../../assets/hero/acm 6.jpg";
import acm7 from "../../assets/hero/acm 7.jpeg";
import acm9 from "../../assets/hero/acm 8.jpeg";
import acm10 from "../../assets/hero/acm 9.jpeg";
import acm11 from "../../assets/hero/acm 10.jpeg";
import acm12 from "../../assets/hero/acm 11.jpeg";

import AnimatedContent from "../AnimatedContent";
import PhotoGrid from "./Photogrid";
import { heroStyles, mediaStyles } from "./heroStyles";

// carousel will group them in sets of 3
const images = [acm12, acm11, acm10, acm9, acm1, acm2, acm3, acm6, acm7];

const Hero = () => {
  const [primaryHover, setPrimaryHover] = useState(false);
  const [secondaryHover, setSecondaryHover] = useState(false);

  const getPrimaryButtonStyle = () => ({
    ...heroStyles.primaryButton,
    background: primaryHover ? "#014a9e" : "#025cc2",
    transform: primaryHover ? "translateY(-2px)" : "translateY(0)",
    boxShadow: primaryHover ? "0 4px 12px rgba(2, 92, 194, 0.4)" : "none",
  });

  const getSecondaryButtonStyle = () => ({
    ...heroStyles.secondaryButton,
    background: secondaryHover ? "#f7fafc" : "transparent",
    borderColor: secondaryHover ? "#3b82f6" : "#e2e8f0",
  });

  return (
    <>
      <style>{mediaStyles}</style>
      <div className="desktop-hero" style={heroStyles.container}>
        <div style={heroStyles.contentWrapper}>
          <div style={heroStyles.leftSide}>
            <div style={heroStyles.leftContent}>
              <div style={heroStyles.centerContent}>
                <AnimatedContent
                  distance={100}
                  direction="vertical"
                  reverse={false}
                  duration={1.7}
                  ease="power3.out"
                  initialOpacity={0}
                  animateOpacity
                  scale={1}
                  threshold={0.1}
                  delay={0.0}
                >
                  <div style={heroStyles.logoContainer}>
                    <img src={acm8} alt="Profile" style={heroStyles.logo} />
                  </div>
                  <div style={heroStyles.titleText}>
                    Association for Computing Machinery{" "}
                    <span style={{ color: "#025cc2" }}>@ UB</span>
                  </div>
                  <div style={heroStyles.subtitleText}>
                    Computer Science by Students for Students
                  </div>
                  <div style={heroStyles.descriptionText}>
                    Join us at ACM, the largest computing community at UB. Learn
                    and grow with CSE peers through tech workshops and social
                    events.
                  </div>
                  <div style={heroStyles.buttonContainer}>
                    <button
                      style={getPrimaryButtonStyle()}
                      onMouseEnter={() => setPrimaryHover(true)}
                      onMouseLeave={() => setPrimaryHover(false)}
                      onClick={() =>
                        window.open(
                          "https://buffalo.campuslabs.com/engage/organization/ubacm",
                          "_blank",
                        )
                      }
                    >
                      Join ACM →
                    </button>
                  </div>
                </AnimatedContent>
              </div>
            </div>
          </div>

          <div style={heroStyles.rightSide}>
            <PhotoGrid items={images} />
          </div>
        </div>
      </div>

      <div className="mobile-hero" style={heroStyles.mobileContainer}>
        <div style={heroStyles.mobileLeftSide}>
          <div style={heroStyles.mobileLeftContent}>
            <div style={heroStyles.centerContent}>
              <AnimatedContent
                distance={100}
                direction="vertical"
                reverse={false}
                duration={1.7}
                ease="power3.out"
                initialOpacity={0}
                animateOpacity
                scale={1}
                threshold={0.1}
                delay={0.0}
              >
                <div style={heroStyles.logoContainer}>
                  <img src={acm8} alt="Profile" style={heroStyles.mobileLogo} />
                </div>
                <div style={heroStyles.mobileTitleText}>
                  Association for Computing Machinery{" "}
                  <span style={{ color: "#025cc2" }}>@ UB</span>
                </div>
                <div style={heroStyles.mobileSubtitleText}>
                  Computer Science by Students for Students
                </div>
                <div style={heroStyles.mobileDescriptionText}>
                  Join us at ACM, the largest computing community at UB. Learn
                  and grow with CSE peers through tech workshops and social
                  events.
                </div>
                <div style={heroStyles.mobileButtonContainer}>
                  <button
                    style={getPrimaryButtonStyle()}
                    onMouseEnter={() => setPrimaryHover(true)}
                    onMouseLeave={() => setPrimaryHover(false)}
                    onClick={() =>
                      window.open(
                        "https://buffalo.campuslabs.com/engage/organization/ubacm",
                        "_blank",
                      )
                    }
                  >
                    Join ACM →
                  </button>
                </div>
              </AnimatedContent>
            </div>
          </div>
        </div>

        <div style={heroStyles.mobileRightSide}>
          <PhotoGrid items={images} />
        </div>
      </div>
    </>
  );
};

export default Hero;
