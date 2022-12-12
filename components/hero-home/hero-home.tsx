"use client";
import SliderDesktop from "./slider-desktop";
import SliderMobile from "./slider-mobile";
import TextHero from "./text-hero";
import useWindowSize from "../../hooks/use-window-size";

export default function HeroHome() {
  const { width } = useWindowSize();

  console.log(width > 769);

  return (
    <section className="container relative grid grid-cols-2 gap-3">
      {width > 769 ? (
        <>
          <TextHero />
          <SliderDesktop />
        </>
      ) : (
        <>
        <h1 className="text-white">mobile</h1>
          <TextHero />
          <SliderMobile />
        </>
      )}
    </section>
  );
}
