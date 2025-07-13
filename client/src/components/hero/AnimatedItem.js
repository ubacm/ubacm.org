import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { GrFormNextLink } from "react-icons/gr";

const AnimatedItem = ({
  children,
  delay = 0,
  index,
  onMouseEnter,
  onClick,
  isInitial = false,
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.5, triggerOnce: false });

  if (isInitial) {
    return (
      <motion.div
        ref={ref}
        data-index={index}
        onMouseEnter={onMouseEnter}
        onClick={onClick}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.7, delay }}
        style={{ cursor: "pointer" }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      data-index={index}
      onMouseEnter={onMouseEnter}
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1.0, delay }}
      style={{ cursor: "pointer" }}
    >
      {children}
    </motion.div>
  );
};

const AnimatedList = ({
  items = [],
  onItemSelect,
  className = "",
  itemClassName = "",
  initialSelectedIndex = 0,
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialSelectedIndex);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitialLoad(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev < items.length - 1 ? prev + 1 : 0));
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        goToNext();
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (onItemSelect) {
          onItemSelect(items[currentIndex], currentIndex);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [items, currentIndex, onItemSelect]);

  return (
    <div
      className={`image-carousel ${className}`}
      style={{ position: "relative", width: "700px", height: "500px" }}
    >
      {/* Image Display */}
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "24px",
        }}
      >
        {items.length > 0 && (
          <AnimatedItem
            key={currentIndex}
            delay={0.0}
            index={currentIndex}
            isInitial={isInitialLoad}
            onMouseEnter={() => {}}
            onClick={() => {
              if (onItemSelect) {
                onItemSelect(items[currentIndex], currentIndex);
              }
            }}
          >
            <div
              className={`item ${itemClassName}`}
              style={{
                padding: "16px",
                backgroundColor: "transparent",
                borderRadius: "8px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={items[currentIndex]}
                alt={`Image ${currentIndex + 1}`}
                style={{
                  width: "500px", 
                  height: "375px", 
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
            </div>
          </AnimatedItem>
        )}
      </div>

      <motion.button
        onClick={goToNext}
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.0, delay: 0.0 }}
        style={{
          position: "absolute",
          right: "10px",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 10,
          background: "transparent",
          color: "#3b82f6",
          border: "none",
          fontSize: "32px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <GrFormNextLink />
      </motion.button>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.0, delay: 1.7 }}
        style={{
          position: "absolute",
          bottom: "10px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "8px",
        }}
      >
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              border: "none",
              background:
                index === currentIndex ? "#3b82f6" : "rgba(0,0,0,0.3)",
              cursor: "pointer",
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default AnimatedList;
