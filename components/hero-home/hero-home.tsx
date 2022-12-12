import SliderDesktop from "./slider-desktop";
import TextHero from "./text-hero";
import useWindowSize from "../../hooks/use-window-size";

export default function HeroHome() {
  return (
    <section className="container relative grid grid-cols-2 gap-3">
      <TextHero />
      <SliderDesktop />
    </section>
  );
}
