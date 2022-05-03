import { useEffect, useRef } from "react";

export const useObserver = (ref, isLoading, canLoad, callback) => {
  const observer = useRef();
  useEffect(() => {
    if (isLoading) return;
    if (observer.current) observer.current.disconnect();
    const handleIntersect = (entries) => {
      if (entries[0].isIntersecting && canLoad) {
        callback();
      }
    };

    observer.current = new IntersectionObserver(handleIntersect);
    observer.current.observe(ref.current);
  }, [isLoading]);
};
