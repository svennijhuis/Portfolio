import Image from "next/image";
import styles from "./cases.module.scss";

import { useRef } from "react";
import useIntersectionObserver from "../../hooks/use-intersection-observer";

export default function CardCases() {
  return (
    <article className={`relative grid grid-cols-3 gap-3  md:gap-6 py-6 md:py-0 md:my-6 border-[#a6a6a6] border-b-[0.5px] md:border-none ${styles.img_hover}`}>
      <Image
        className="col-span-3 sm:col-span-1 aspect-video md:aspect-square w-full h-auto object-cover"
        src=""
        alt=""
        width={500}
        height={200}
      />
      <div className="col-span-3 sm:col-span-2 flex flex-col justify-start md:border-[#a6a6a6] md:border-b-[0.5px]">
        {" "}
        <h3 className="text-18 leading-28 md:text-22 md:leading-27 font-normal text-black mb-3">
          sdaf
        </h3>
        <h3 className="text-25 leading-35 md:text-35 md:leading-40 font-normal text-black md:w-[90%] md:mb-3">
          Website gemaakt met dynamische blokken
        </h3>
      </div>
    </article>
  );
}
