// import { useState, useRef, useEffect } from "react";

// export const useElementOnScreen = (options: object) => {
//     console.log(options)
//   const containerRef: any = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);

//   const callbackFunction = (entries: any) => {
//     const [entry] = entries;
//     setIsVisible(entry.isIntersecting);

//     console.log(entries);
//   };

//   useEffect(() => {
//     const observer = new IntersectionObserver(callbackFunction, options);
//     if (containerRef.current) observer.observe(containerRef.current);
//     return () => {
//       if (containerRef.current) observer.unobserve(containerRef.current);
//     };
//   }, [containerRef, options]);
//   return [containerRef, isVisible];
// };

import { RefObject, useEffect, useState } from "react";

interface Args extends IntersectionObserverInit {
  freezeOnceVisible?: boolean;
}

function useIntersectionObserver(
  elementRef: RefObject<Element>,
  {
    threshold = 0,
    root = null,
    rootMargin = "-50% 0% -50% 0%",
    freezeOnceVisible = false,
  }: Args
): IntersectionObserverEntry | undefined {
  const [entry, setEntry] = useState<IntersectionObserverEntry>();

  const frozen = entry?.isIntersecting && freezeOnceVisible;

  const updateEntry = ([entry]: IntersectionObserverEntry[]): void => {
    setEntry(entry);
  };

  useEffect(() => {
    const node = elementRef?.current; // DOM Ref
    const hasIOSupport = !!window.IntersectionObserver;

    if (!hasIOSupport || frozen || !node) return;

    const observerParams = { threshold, root, rootMargin };
    const observer = new IntersectionObserver(updateEntry, observerParams);

    observer.observe(node);

    return () => observer.disconnect();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    elementRef?.current,
    JSON.stringify(threshold),
    root,
    rootMargin,
    frozen,
  ]);

  return entry;
}

export default useIntersectionObserver;
