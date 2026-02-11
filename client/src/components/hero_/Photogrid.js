import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { GrFormNextLink } from "react-icons/gr";

const PhotoGridItem = ({ src, shouldAnimate }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.3, triggerOnce: true });

  if (shouldAnimate) {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        style={{
          position: "relative",
          borderRadius: "12px",
          overflow: "hidden",
          cursor: "pointer",
          width: "100%",
          height: "100%",
        }}
      >
        <img
          src={src}
          alt="ACM event"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </motion.div>
    );
  }

  return (
    <div
      style={{
        position: "relative",
        borderRadius: "12px",
        overflow: "hidden",
        cursor: "pointer",
        width: "100%",
        height: "100%",
      }}
    >
      <img
        src={src}
        alt="ACM event"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </div>
  );
};

const PhotoGrid = ({ items = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile view
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Group images in sets of 3 for desktop, 1 for mobile
  const itemsPerSet = isMobile ? 1 : 3;
  const totalSets = Math.ceil(items.length / itemsPerSet);

  useEffect(() => {
    // After initial animation completes, disable animations for carousel
    const timer = setTimeout(() => {
      setIsInitialLoad(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSets);
  };

  const currentImages = items.slice(
    currentIndex * itemsPerSet,
    currentIndex * itemsPerSet + itemsPerSet,
  );

  // Mobile single image carousel
  if (isMobile) {
    return (
      <div style={{ position: "relative", width: "100%", maxWidth: "500px" }}>
        <div
          style={{
            width: "100%",
            height: "300px",
            padding: "20px",
          }}
        >
          {currentImages[0] && (
            <PhotoGridItem
              src={currentImages[0]}
              shouldAnimate={isInitialLoad && currentIndex === 0}
            />
          )}
        </div>

        {/* Navigation Arrow for mobile */}
        {totalSets > 1 && (
          <motion.button
            onClick={goToNext}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={{
              position: "absolute",
              right: "-15px",
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 10,
              background: "white",
              color: "#3b82f6",
              border: "1px solid #e2e8f0",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              fontSize: "28px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <GrFormNextLink />
          </motion.button>
        )}
      </div>
    );
  }

  // Desktop 3-image grid
  return (
    <div style={{ position: "relative", width: "100%", maxWidth: "750px" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gridTemplateRows: "1fr 1fr",
          gap: "16px",
          width: "100%",
          height: "500px",
          padding: "20px",
        }}
      >
        {/* First image - spans 2 rows on the left */}
        <div style={{ gridColumn: "1", gridRow: "1 / 3" }}>
          {currentImages[0] && (
            <PhotoGridItem
              src={currentImages[0]}
              shouldAnimate={isInitialLoad && currentIndex === 0}
            />
          )}
        </div>

        {/* Second image - top right */}
        <div style={{ gridColumn: "2", gridRow: "1" }}>
          {currentImages[1] && (
            <PhotoGridItem
              src={currentImages[1]}
              shouldAnimate={isInitialLoad && currentIndex === 0}
            />
          )}
        </div>

        {/* Third image - bottom right */}
        <div style={{ gridColumn: "2", gridRow: "2" }}>
          {currentImages[2] && (
            <PhotoGridItem
              src={currentImages[2]}
              shouldAnimate={isInitialLoad && currentIndex === 0}
            />
          )}
        </div>
      </div>

      {/* Navigation Arrow for desktop */}
      {totalSets > 1 && (
        <>
          <motion.button
            onClick={goToNext}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={{
              position: "absolute",
              right: "-35px",
              top: "45%",
              transform: "translateY(-50%)",
              zIndex: 10,
              background: "white",
              color: "#3b82f6",
              border: "1px solid #e2e8f0",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              fontSize: "28px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <GrFormNextLink />
          </motion.button>
        </>
      )}
    </div>
  );
};

export default PhotoGrid;
