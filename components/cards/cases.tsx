"use client";
import Image from "next/image";
import styles from "./cases.module.scss";

import { useRef } from "react";
import useIntersectionObserver from "../../hooks/use-intersection-observer";

export default function CardCases() {
  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, {});
  const isVisible = !!entry?.isIntersecting;

  return (
    <article ref={ref} className="border-black border-b-[1px] last-of-type:border-0 py-5 last-of-type:pb-0 md:last-of-type:pb-12 md:first-of-type:pt-12 relative">
      <Image
        style={isVisible ? { opacity: 1 } : { opacity: 0 }}
        className={`md:absolute md:opacity-0 md:hover:opacity-100 ${styles.img_hover}`}
        src=""
        alt=""
        width={500}
        height={200}
      />
      <h3 className="text-18 leading-28 md:text-30 md:leading-30 font-normal text-black">
        sdaf
      </h3>
      <h3 className="text-25 leading-35 md:text-40 md:leading-50 font-medium text-black md:w-[90%]">
        Website gemaakt met dynamische blokken
      </h3>
    </article>
  );
}
