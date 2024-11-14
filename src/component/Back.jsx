import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const Back = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    const scrollStep = -window.scrollY / 60; // Increase the divisor to reduce speed
    const scrollInterval = setInterval(() => {
      if (window.scrollY === 0) {
        clearInterval(scrollInterval);
      }
      window.scrollBy(0, scrollStep);
    }, 16); 
  };

  return (
    isVisible && (
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          scrollToTop();
        }}
        className="fixed bottom-4 right-4 bg-[#FEA116] text-white rounded-full p-3 shadow-lg hover:bg-yellow-500 transition duration-300"
        aria-label="Back to top"
      >
        <FaArrowUp size={24} />
      </a>
    )
  );
};

export default Back;