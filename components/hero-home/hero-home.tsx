"use client";
import SliderDesktop from "./slider-desktop";
import SliderMobile from "./slider-mobile";
import TextHero from "./text-hero";
import useWindowSize from "../../hooks/use-window-size";

export default function HeroHome() {
  const { width } = useWindowSize();

  console.log(width > 769);

  return (
    <section className="container relative flex flex-col justify-center md:justify-start md:grid md:grid-cols-2 gap-3 h-[80vh] md:h-auto">
      {width > 769 ? (
        <>
          <TextHero />
          <SliderDesktop />
        </>
      ) : (
        <>
          <TextHero />
          <SliderMobile />
        </>
      )}
    </section>
  );
}
