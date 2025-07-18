import profilePic from "../../assets/acmlogo.png";
import acm1 from "../../assets/hero/acm 1.jpg";
import acm2 from "../../assets/hero/acm 2.jpeg";
import acm3 from "../../assets/hero/acm 3.jpg";
import acm6 from "../../assets/hero/acm 6.jpg";
import acm7 from "../../assets/hero/acm 7.jpeg";

import AnimatedContent from "../AnimatedContent";
import AnimatedList from "./AnimatedItem";
import { heroStyles, mediaStyles } from "./heroStyles";
import "./AnimatedList.css";

const images = [acm1, acm2, acm3, acm6, acm7];

const Hero = () => {
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
                    <img
                      src={profilePic}
                      alt="Profile"
                      style={heroStyles.logo}
                    />
                  </div>
                  <div style={heroStyles.titleText}>
                    Association for Computing Machinery @ UB
                  </div>
                  <div style={heroStyles.subtitleText}>
                    Computer Science by Students for Students
                  </div>
                </AnimatedContent>
              </div>
            </div>
          </div>


          <div style={heroStyles.rightSide}>
            <AnimatedList
              items={images}
              onItemSelect={(item, index) => console.log(item, index)}
              showGradients={false}
              enableArrowNavigation={true}
              displayScrollbar={true}
              itemClassName="image-item"
            />
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
                  <img
                    src={profilePic}
                    alt="Profile"
                    style={heroStyles.mobileLogo}
                  />
                </div>
                <div style={heroStyles.mobileTitleText}>
                  Association for Computing Machinery @ UB
                </div>
                <div style={heroStyles.mobileSubtitleText}>
                  Computer Science by Students for Students
                </div>
              </AnimatedContent>
            </div>
          </div>
        </div>

        <div style={heroStyles.mobileRightSide}>
          <AnimatedList
            items={images}
            onItemSelect={(item, index) => console.log(item, index)}
            showGradients={false}
            enableArrowNavigation={true}
            displayScrollbar={true}
            itemClassName="image-item"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
