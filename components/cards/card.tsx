import Image from "next/image";
import styles from "./card.module.scss";

export default function Card() {
  return (
    <article className={`${styles.gradient_box} p-2`}>
      <Image src="" alt="" width={500} height={500} />
      <h3 className="text-30 leading-30 text-white font-semibold "></h3>
      <p className="text-18 leading-28 text-white font-normal"></p>
    </article>
  );
}
