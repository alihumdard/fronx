// hooks/useScrollDetection.js
import { useState, useEffect } from 'react';

const useScrollDetection = (threshold = 10) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > threshold);
    };

    // Set initial state on mount
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]); // Re-run effect if threshold changes

  return isScrolled;
};

export default useScrollDetection;