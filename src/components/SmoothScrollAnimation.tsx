import { useEffect, useRef } from "react";

const SmoothScrollAnimation = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    // Track all elements with scroll animation class
    const animatableElements = document.querySelectorAll("[data-scroll-animate]");
    animatableElements.forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => {
      animatableElements.forEach((el) => {
        observerRef.current?.unobserve(el);
      });
    };
  }, []);

  return null;
};

export default SmoothScrollAnimation;
