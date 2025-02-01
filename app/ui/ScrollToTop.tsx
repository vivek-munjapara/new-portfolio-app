"use client"
import { useEffect, useState } from 'react';

const ScrollToTop = () => {
   // State to track whether to show the button
   const [isVisible, setIsVisible] = useState(false);

   // Handle scroll event
   const handleScroll = () => {
      if (window.scrollY > 500) {
         setIsVisible(true);
      } else {
         setIsVisible(false);
      }
   };

   // Smoothly scroll to the top when the button is clicked
   const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
   };

   useEffect(() => {
      // Add scroll event listener when component mounts
      window.addEventListener('scroll', handleScroll);

      // Cleanup event listener on unmount
      return () => window.removeEventListener('scroll', handleScroll);
   }, []);

   return (
      isVisible && (
         <button
            onClick={scrollToTop}
            className="fixed bottom-5 right-5 p-2 bg-gray-950/60 sm:bg-black hover:bg-red-800 text-white rounded-full shadow-lg transition-transform transform hover:scale-105 z-50 text-xl"
         >
            ↑
         </button>
      )
   );
};



export default ScrollToTop;
