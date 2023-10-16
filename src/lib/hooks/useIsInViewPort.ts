import { MutableRefObject, useEffect, useMemo, useState } from "react";

export default function useIsInViewport(ref: MutableRefObject<any>) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const observer = useMemo(() => {
    try {
      return new IntersectionObserver(([entry]) =>
        setIsIntersecting(entry.isIntersecting)
      );
    } catch {}
  }, []);

  useEffect(() => {
    if (!ref.current) {
      return;
    }
    observer?.observe(ref.current);

    return () => {
      observer?.disconnect();
    };
  }, [ref, observer]);

  return isIntersecting;
}
