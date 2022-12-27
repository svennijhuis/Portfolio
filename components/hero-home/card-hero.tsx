import { useRef } from "react";
import useIntersectionObserver from "../../hooks/use-intersection-observer";
import useWindowSize from "../../hooks/use-window-size";

export default function CardHero() {
  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, {});
  const isVisible = !!entry?.isIntersecting;
  const { width } = useWindowSize();
  return (
    <div
      ref={ref}
      className={`md:py-4 max-w-[350px] w-[50vw] ${
        isVisible || width < 769 ? "opacity-100" : "opacity-60"
      }`}
    >
      <h3 className="text-white text-50 font-medium">12</h3>
      <p className="text-white text-20 font-normal opacity-80">
        Dit is een test
      </p>
    </div>
  );
}
