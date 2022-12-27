"use client";
import { InfiniteLoopSlider } from "../hero-home/slider/InfiniteLoopSlider";
import styles from "../hero-home/slider/style.module.scss";
import CardHero from "./card-hero";

import { Parallax } from "react-scroll-parallax";
import SectionParallax from "./section-parallax";

export default function SliderMobile() {
  return (
    <SectionParallax>
      <article className=" mx-[-20px] overflow-hidden">
        <Parallax translateX={[-200, -20]} easing="easeOutQuad">
          <div className={styles.tag__list}>
            <InfiniteLoopSlider
              duration={{
                "--duration": `${"0"}ms`,
              }}
            >
              {Array.from({ length: 10 }).map((_, index) => (
                <CardHero key={index + 1} />
              ))}
            </InfiniteLoopSlider>
          </div>
        </Parallax>
      </article>
    </SectionParallax>
  );
}
