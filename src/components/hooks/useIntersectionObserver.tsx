import { useEffect, useRef } from 'react';

const useIntersectionObserver = (classNames: string) => {
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]); // Correctly type the ref

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const classList = classNames.split(' '); // Split the string into individual class names
            classList.forEach((className) => {
              entry.target.classList.add(className); // Add each class name individually
            });
            observer.unobserve(entry.target); // Stop observing the element once it is visible
          }
        });
      },
      { threshold: 0.5 }
    );

    elementsRef.current.forEach((element) => {
      if (element) observer.observe(element);
    });

    return () => {
      elementsRef.current.forEach((element) => {
        if (element) observer.unobserve(element);
      });
    };
  }, [classNames]);

  return elementsRef;
};

export default useIntersectionObserver;