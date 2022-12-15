import { InfiniteLoopSlider } from "../hero-home/slider/InfiniteLoopSlider";
// import { Tag } from "../hero-home/slider/tag";
import styles from "../hero-home/slider/style.module.scss";
import CardHero from "./card-hero";

import { useEffect, useState } from "react";

export default function SliderMobile() {
  const DURATION = 100000;
  const random = (min: any, max: any) =>
    Math.floor(Math.random() * (max - min)) + min;

  return (
    <article className=" mx-[-20px] overflow-hidden">
      <div
        className={styles.tag__list}
        // style={{ transform: `translateX(${"-10px"})` }}
      >
        <InfiniteLoopSlider
          duration={{
            "--duration": `${random(DURATION - 5000, DURATION + 5000)}ms`,
          }}
        >
          {/* {numbersCopy.map((tag, index) => (
          <Tag text={tag} key={index} />
        ))} */}
          {Array.from({ length: 10 }).map((_, index) => (
            <CardHero key={index + 1} />
          ))}
        </InfiniteLoopSlider>
      </div>
    </article>
  );
}
